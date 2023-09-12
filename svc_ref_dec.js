class SVCDecoder
{
    #previousFrames = [];

    decodeIframe(data)
    {
        if((data[0] === data[1]) && (data[0] === 0) && (data[2] === data[3]) && (data[2] === 4)) throw new Error("Not I-frame");
        const weight = (data[4] << 8) | data[5];
        const height = (data[6] << 8) | data[7];
        const stride = data[8];

        this.#previousFrames.unshift(data.slice(12, 12 + (w * h * s)));
        if(this.#previousFrames.length === 60) this.#previousFrames.pop();

        return { weight, height, stride, data: data.slice(12, 12 + (w * h * s)) };
    };
};