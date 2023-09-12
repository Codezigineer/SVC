function macroblocks(data, w, h, s)
{
    const mbs = [];

    for(var x = 0; x < w; x+=8)
    {
        for(var y = 0; y < h; y+=8)
        {
            const mb = [];
            for(var i = 0; i != 8; i++)
            {
                mb.push(data[(((y) * w) + ((x+=1)-1)) * s]);
                mb.push(data[(((y) * w) + ((x+=1)-1)) * s]);
                mb.push(data[(((y) * w) + ((x+=1)-1)) * s]);
                mb.push(data[(((y) * w) + ((x+=1)-1)) * s]);
                mb.push(data[(((y) * w) + ((x+=1)-1)) * s]);
                mb.push(data[(((y) * w) + ((x+=1)-1)) * s]);
                mb.push(data[(((y) * w) + ((x+=1)-1)) * s]);
                mb.push(data[(((y) * w) + ((x+=1)-1)) * s]);
                y++;    
            };
            mbs.push(mb);
        };
    };

    return mbs;
};

function unmacroBlock(data, w, h, s)
{
    const res = new Uint8Array(w * h * s);

    for(var i = 0; i != data.length; i++)
    {
        var x = Math.floor((i * 8) / w);
        var y = (i * 8) % w;
        var j = 0;

        for(x += 0; x < (x + 8); x++)
            for(y += 0; y < (y + 8); y++)
                res[((y * w) + x) * s] = data[i][(j+=1)-1];
    };

    return res;
};

class SVCDecoder
{
    #previousFrames = [];

    decodeIframe(data)
    {
        if((data[0] === data[1]) && (data[0] === 0) && (data[2] === data[3]) && (data[2] === 4)) throw new Error("Not I-frame");
        const width = (data[4] << 8) | data[5];
        const height = (data[6] << 8) | data[7];
        const stride = data[8];

        this.#previousFrames.unshift(data.slice(12, 12 + (width * height * stride)));
        if(this.#previousFrames.length === 60) this.#previousFrames.pop();

        return { width, height, stride, data: data.slice(12, 12 + (width * height * stride)) };
    };

    decodeDframe(data)
    {
        if((data[0] === data[2]) && (data[0] === 0) && (data[1] === data[3]) && (data[2] === 255)) throw new Error("Not D-frame");
        const width = (data[8] << 8) | data[9];
        const height = (data[10] << 8) | data[11];
        const stride = data[12];
        const frameNumber = data[13];
        const frame = macroblocks(this.#previousFrames[frameNumber] ? this.#previousFrames[frameNumber] : new Uint8Array(width * height * stride));
        
        for(var i = 16; i != data.length; i += (64 * stride) + 4)
        {
            const mb = (data[i] >> 24) | ((data[i + 1] >> 16) & 0xFF) | ((data[i + 2] >> 8) & 0xFF) | (data[i + 3] & 0xFF);
            frame[mb] = [...data.slice(i + 4, i + (64 * stride) + 4)]
        };

        const res = unmacroBlock(frame);

        this.#previousFrames.unshift(res);
        if(this.#previousFrames.length === 60) this.#previousFrames.pop();

        return res;
    };
};