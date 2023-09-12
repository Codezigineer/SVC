const lossless = true;
const compLevel = 2;

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

function equal(data1, data2)
{
    if(lossless) return data1 === data2;
    const res = 0;
    for(var i = 0; i != data1.length; i++) res += (data1[i] / data2[i]);
    return (Math.round((res/data1.length)*compLevel) < 1);
};

function diff(data1, data2, w, h, s, diffFrame)
{
    const mb1 = macroblocks(data1, w, h, s), mb2 = macroblocks(data2, w, h, s), res = [0, 255, 0, 255, 0, 0, 0, 0, w >> 8, w & 0xFF, h >> 8, h & 0xFF, s, diffFrame, 0, 0];
    var mbc = 0;
    for(var i = 0; i != mb1.length; i++) if(equal(mb1[i], mb2[i])) 
        {
            mbc++;
            res.push([0, (i >> 16) & 0xFF, (i >> 8) & 0xFF, i & 0xFF, ...mb2[i]]);
        };
    res[7] = res.length & 0xFF;
    res[6] = (res.length >> 8) & 0xFF;
    res[5] = (res.length >> 16) & 0xFF;
    res[4] = res.length >> 24;
    return res;
}; 

class SVCEncoder 
{
    #previousFrames = [];
    #w = 0;
    #h = 0;
    $s = 0;

    constructor(w, h, s)
    {
        this.#w = w;
        this.#h = h;
        this.#s = s;
        const arr = [...new Uint8Array(w * h * s)];
        this.#previousFrames = [arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr, arr];
    };

    // D-frame. Goes through the previous 60 frames (replaced with black if don't exist), and calculates the difference between this one and the previous 60 frames. the frame difference that is smallest is stored, and the previous frame it belongs to.
    encodeFrameDiff(data)
    {
        const diffs = [
                diff(this.#previousFrames[0], data, this.#w, this.#h, this.#s, 0),
                diff(this.#previousFrames[1], data, this.#w, this.#h, this.#s, 1),
                diff(this.#previousFrames[2], data, this.#w, this.#h, this.#s, 2),
                diff(this.#previousFrames[3], data, this.#w, this.#h, this.#s, 3),
                diff(this.#previousFrames[4], data, this.#w, this.#h, this.#s, 4),
                diff(this.#previousFrames[5], data, this.#w, this.#h, this.#s, 5),
                diff(this.#previousFrames[6], data, this.#w, this.#h, this.#s, 6),
                diff(this.#previousFrames[7], data, this.#w, this.#h, this.#s, 7),
                diff(this.#previousFrames[8], data, this.#w, this.#h, this.#s, 8),
                diff(this.#previousFrames[9], data, this.#w, this.#h, this.#s, 9),
                diff(this.#previousFrames[10], data, this.#w, this.#h, this.#s, 10),
                diff(this.#previousFrames[11], data, this.#w, this.#h, this.#s, 11),
                diff(this.#previousFrames[12], data, this.#w, this.#h, this.#s, 12),
                diff(this.#previousFrames[13], data, this.#w, this.#h, this.#s, 13),
                diff(this.#previousFrames[14], data, this.#w, this.#h, this.#s, 14),
                diff(this.#previousFrames[15], data, this.#w, this.#h, this.#s, 15),
                diff(this.#previousFrames[16], data, this.#w, this.#h, this.#s, 16),
                diff(this.#previousFrames[17], data, this.#w, this.#h, this.#s, 17),
                diff(this.#previousFrames[18], data, this.#w, this.#h, this.#s, 18),
                diff(this.#previousFrames[19], data, this.#w, this.#h, this.#s, 19),
                diff(this.#previousFrames[20], data, this.#w, this.#h, this.#s, 20),
                diff(this.#previousFrames[21], data, this.#w, this.#h, this.#s, 21),
                diff(this.#previousFrames[22], data, this.#w, this.#h, this.#s, 22),
                diff(this.#previousFrames[23], data, this.#w, this.#h, this.#s, 23),
                diff(this.#previousFrames[24], data, this.#w, this.#h, this.#s, 24),
                diff(this.#previousFrames[25], data, this.#w, this.#h, this.#s, 25),
                diff(this.#previousFrames[26], data, this.#w, this.#h, this.#s, 26),
                diff(this.#previousFrames[27], data, this.#w, this.#h, this.#s, 27),
                diff(this.#previousFrames[28], data, this.#w, this.#h, this.#s, 28),
                diff(this.#previousFrames[29], data, this.#w, this.#h, this.#s, 29),
                diff(this.#previousFrames[30], data, this.#w, this.#h, this.#s, 30),
                diff(this.#previousFrames[31], data, this.#w, this.#h, this.#s, 31),
                diff(this.#previousFrames[32], data, this.#w, this.#h, this.#s, 32),
                diff(this.#previousFrames[33], data, this.#w, this.#h, this.#s, 33),
                diff(this.#previousFrames[34], data, this.#w, this.#h, this.#s, 34),
                diff(this.#previousFrames[35], data, this.#w, this.#h, this.#s, 35),
                diff(this.#previousFrames[36], data, this.#w, this.#h, this.#s, 36),
                diff(this.#previousFrames[37], data, this.#w, this.#h, this.#s, 37),
                diff(this.#previousFrames[38], data, this.#w, this.#h, this.#s, 38),
                diff(this.#previousFrames[39], data, this.#w, this.#h, this.#s, 39),
                diff(this.#previousFrames[40], data, this.#w, this.#h, this.#s, 40),
                diff(this.#previousFrames[41], data, this.#w, this.#h, this.#s, 41),
                diff(this.#previousFrames[42], data, this.#w, this.#h, this.#s, 42),
                diff(this.#previousFrames[43], data, this.#w, this.#h, this.#s, 43),
                diff(this.#previousFrames[44], data, this.#w, this.#h, this.#s, 44),
                diff(this.#previousFrames[45], data, this.#w, this.#h, this.#s, 45),
                diff(this.#previousFrames[46], data, this.#w, this.#h, this.#s, 46),
                diff(this.#previousFrames[47], data, this.#w, this.#h, this.#s, 47),
                diff(this.#previousFrames[48], data, this.#w, this.#h, this.#s, 48),
                diff(this.#previousFrames[49], data, this.#w, this.#h, this.#s, 49),
                diff(this.#previousFrames[50], data, this.#w, this.#h, this.#s, 50),
                diff(this.#previousFrames[51], data, this.#w, this.#h, this.#s, 51),
                diff(this.#previousFrames[52], data, this.#w, this.#h, this.#s, 52),
                diff(this.#previousFrames[53], data, this.#w, this.#h, this.#s, 53),
                diff(this.#previousFrames[54], data, this.#w, this.#h, this.#s, 54),
                diff(this.#previousFrames[55], data, this.#w, this.#h, this.#s, 55),
                diff(this.#previousFrames[56], data, this.#w, this.#h, this.#s, 56),
                diff(this.#previousFrames[57], data, this.#w, this.#h, this.#s, 57),
                diff(this.#previousFrames[58], data, this.#w, this.#h, this.#s, 58),
                diff(this.#previousFrames[59], data, this.#w, this.#h, this.#s, 59),
                diff(this.#previousFrames[60], data, this.#w, this.#h, this.#s, 60)
            ];
        
        let smallest = 100000000000000;

        for(let i = 0; i != diffs.length; i++)
        {
            if(diffs[i].length < smallest)
            {
                if(i === diffs.length-1) 
                {
                    this.#previousFrames.unshift(data);
                    this.#previousFrames.pop();
                    return diffs[i];
                };
                smallest = diffs[i].length; 
            };
        };

        throw new Error("Debug extensively");
    };

    // I-frame. stores frames independently.
    encodeFrameIntra(data, w, h, s)
    {
        this.#previousFrames.unshift(data);
        this.#previousFrames.pop();
        return [0, 0, 4, 4, w >> 8, w & 0xFF, h >> 8, h & 0xFF, s, 0, 0, 0, ...data];
    };
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