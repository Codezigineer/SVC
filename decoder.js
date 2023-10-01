function macroblock(d, w, h)
{
	let list = [];
	for(var x = 0; x != w; x+=8)
		for(var y = 0; y != h; y+=8)
			list.push([
				d[(((y + 0) * w) + (x + 0)) * (d.byteLength / (w * h))],
				d[(((y + 0) * w) + (x + 1)) * (d.byteLength / (w * h))],
				d[(((y + 0) * w) + (x + 2)) * (d.byteLength / (w * h))],
				d[(((y + 0) * w) + (x + 3)) * (d.byteLength / (w * h))],
				d[(((y + 0) * w) + (x + 4)) * (d.byteLength / (w * h))],
				d[(((y + 0) * w) + (x + 5)) * (d.byteLength / (w * h))],
				d[(((y + 0) * w) + (x + 6)) * (d.byteLength / (w * h))],
				d[(((y + 0) * w) + (x + 7)) * (d.byteLength / (w * h))],
				d[(((y + 1) * w) + (x + 0)) * (d.byteLength / (w * h))],
				d[(((y + 1) * w) + (x + 1)) * (d.byteLength / (w * h))],
				d[(((y + 1) * w) + (x + 2)) * (d.byteLength / (w * h))],
				d[(((y + 1) * w) + (x + 3)) * (d.byteLength / (w * h))],
				d[(((y + 1) * w) + (x + 4)) * (d.byteLength / (w * h))],
				d[(((y + 1) * w) + (x + 5)) * (d.byteLength / (w * h))],
				d[(((y + 1) * w) + (x + 6)) * (d.byteLength / (w * h))],
				d[(((y + 1) * w) + (x + 7)) * (d.byteLength / (w * h))],
				d[(((y + 2) * w) + (x + 0)) * (d.byteLength / (w * h))],
				d[(((y + 2) * w) + (x + 1)) * (d.byteLength / (w * h))],
				d[(((y + 2) * w) + (x + 2)) * (d.byteLength / (w * h))],
				d[(((y + 2) * w) + (x + 3)) * (d.byteLength / (w * h))],
				d[(((y + 2) * w) + (x + 4)) * (d.byteLength / (w * h))],
				d[(((y + 2) * w) + (x + 5)) * (d.byteLength / (w * h))],
				d[(((y + 2) * w) + (x + 6)) * (d.byteLength / (w * h))],
				d[(((y + 2) * w) + (x + 7)) * (d.byteLength / (w * h))],
				d[(((y + 3) * w) + (x + 0)) * (d.byteLength / (w * h))],
				d[(((y + 3) * w) + (x + 1)) * (d.byteLength / (w * h))],
				d[(((y + 3) * w) + (x + 2)) * (d.byteLength / (w * h))],
				d[(((y + 3) * w) + (x + 3)) * (d.byteLength / (w * h))],
				d[(((y + 3) * w) + (x + 4)) * (d.byteLength / (w * h))],
				d[(((y + 3) * w) + (x + 5)) * (d.byteLength / (w * h))],
				d[(((y + 3) * w) + (x + 6)) * (d.byteLength / (w * h))],
				d[(((y + 3) * w) + (x + 7)) * (d.byteLength / (w * h))],
				d[(((y + 4) * w) + (x + 0)) * (d.byteLength / (w * h))],
				d[(((y + 4) * w) + (x + 1)) * (d.byteLength / (w * h))],
				d[(((y + 4) * w) + (x + 2)) * (d.byteLength / (w * h))],
				d[(((y + 4) * w) + (x + 3)) * (d.byteLength / (w * h))],
				d[(((y + 4) * w) + (x + 4)) * (d.byteLength / (w * h))],
				d[(((y + 4) * w) + (x + 5)) * (d.byteLength / (w * h))],
				d[(((y + 4) * w) + (x + 6)) * (d.byteLength / (w * h))],
				d[(((y + 4) * w) + (x + 7)) * (d.byteLength / (w * h))],
				d[(((y + 5) * w) + (x + 0)) * (d.byteLength / (w * h))],
				d[(((y + 5) * w) + (x + 1)) * (d.byteLength / (w * h))],
				d[(((y + 5) * w) + (x + 2)) * (d.byteLength / (w * h))],
				d[(((y + 5) * w) + (x + 3)) * (d.byteLength / (w * h))],
				d[(((y + 5) * w) + (x + 4)) * (d.byteLength / (w * h))],
				d[(((y + 5) * w) + (x + 5)) * (d.byteLength / (w * h))],
				d[(((y + 5) * w) + (x + 6)) * (d.byteLength / (w * h))],
				d[(((y + 5) * w) + (x + 7)) * (d.byteLength / (w * h))],
				d[(((y + 6) * w) + (x + 0)) * (d.byteLength / (w * h))],
				d[(((y + 6) * w) + (x + 1)) * (d.byteLength / (w * h))],
				d[(((y + 6) * w) + (x + 2)) * (d.byteLength / (w * h))],
				d[(((y + 6) * w) + (x + 3)) * (d.byteLength / (w * h))],
				d[(((y + 6) * w) + (x + 4)) * (d.byteLength / (w * h))],
				d[(((y + 6) * w) + (x + 5)) * (d.byteLength / (w * h))],
				d[(((y + 6) * w) + (x + 6)) * (d.byteLength / (w * h))],
				d[(((y + 6) * w) + (x + 7)) * (d.byteLength / (w * h))],
				d[(((y + 7) * w) + (x + 0)) * (d.byteLength / (w * h))],
				d[(((y + 7) * w) + (x + 1)) * (d.byteLength / (w * h))],
				d[(((y + 7) * w) + (x + 2)) * (d.byteLength / (w * h))],
				d[(((y + 7) * w) + (x + 3)) * (d.byteLength / (w * h))],
				d[(((y + 7) * w) + (x + 4)) * (d.byteLength / (w * h))],
				d[(((y + 7) * w) + (x + 5)) * (d.byteLength / (w * h))],
				d[(((y + 7) * w) + (x + 6)) * (d.byteLength / (w * h))],
				d[(((y + 7) * w) + (x + 7)) * (d.byteLength / (w * h))],
			]);
	return list;
};

function unmacroblock(mb, w, h, s)
{
	let res = new Array(w * h * s).fill(0);
	for(var x = 0, i = 0; x != w; x+=8)
	{
		for(var y = 0; y != h; (() => { y+=8; i+=1 })()) 
		{
			let j = -1;
			res[((y * w) + x) * s] = mb[j+=1];
			res[((y * w) + x + 1) * s] = mb[j+=1];
			res[((y * w) + x + 2) * s] = mb[j+=1];
			res[((y * w) + x + 3) * s] = mb[j+=1];
			res[((y * w) + x + 4) * s] = mb[j+=1];
			res[((y * w) + x + 5) * s] = mb[j+=1];
			res[((y * w) + x + 6) * s] = mb[j+=1];
			res[((y * w) + x + 7) * s] = mb[j+=1];
			res[(((y + 1) * w) + x) * s] = mb[j+=1];
			res[(((y + 1) * w) + x + 1) * s] = mb[j+=1];
			res[(((y + 1) * w) + x + 2) * s] = mb[j+=1];
			res[(((y + 1) * w) + x + 3) * s] = mb[j+=1];
			res[(((y + 1) * w) + x + 4) * s] = mb[j+=1];
			res[(((y + 1) * w) + x + 5) * s] = mb[j+=1];
			res[(((y + 1) * w) + x + 6) * s] = mb[j+=1];
			res[(((y + 1) * w) + x + 7) * s] = mb[j+=1];
			res[(((y + 2) * w) + x) * s] = mb[j+=1];
			res[(((y + 2) * w) + x + 1) * s] = mb[j+=1];
			res[(((y + 2) * w) + x + 2) * s] = mb[j+=1];
			res[(((y + 2) * w) + x + 3) * s] = mb[j+=1];
			res[(((y + 2) * w) + x + 4) * s] = mb[j+=1];
			res[(((y + 2) * w) + x + 5) * s] = mb[j+=1];
			res[(((y + 2) * w) + x + 6) * s] = mb[j+=1];
			res[(((y + 2) * w) + x + 7) * s] = mb[j+=1];
			res[(((y + 3) * w) + x) * s] = mb[j+=1];
			res[(((y + 3) * w) + x + 1) * s] = mb[j+=1];
			res[(((y + 3) * w) + x + 2) * s] = mb[j+=1];
			res[(((y + 3) * w) + x + 3) * s] = mb[j+=1];
			res[(((y + 3) * w) + x + 4) * s] = mb[j+=1];
			res[(((y + 3) * w) + x + 5) * s] = mb[j+=1];
			res[(((y + 3) * w) + x + 6) * s] = mb[j+=1];
			res[(((y + 3) * w) + x + 7) * s] = mb[j+=1];
			res[(((y + 4) * w) + x) * s] = mb[j+=1];
			res[(((y + 4) * w) + x + 1) * s] = mb[j+=1];
			res[(((y + 4) * w) + x + 2) * s] = mb[j+=1];
			res[(((y + 4) * w) + x + 3) * s] = mb[j+=1];
			res[(((y + 4) * w) + x + 4) * s] = mb[j+=1];
			res[(((y + 4) * w) + x + 5) * s] = mb[j+=1];
			res[(((y + 4) * w) + x + 6) * s] = mb[j+=1];
			res[(((y + 4) * w) + x + 7) * s] = mb[j+=1];
			res[(((y + 5) * w) + x) * s] = mb[j+=1];
			res[(((y + 5) * w) + x + 1) * s] = mb[j+=1];
			res[(((y + 5) * w) + x + 2) * s] = mb[j+=1];
			res[(((y + 5) * w) + x + 3) * s] = mb[j+=1];
			res[(((y + 5) * w) + x + 4) * s] = mb[j+=1];
			res[(((y + 5) * w) + x + 5) * s] = mb[j+=1];
			res[(((y + 5) * w) + x + 6) * s] = mb[j+=1];
			res[(((y + 5) * w) + x + 7) * s] = mb[j+=1];
			res[(((y + 6) * w) + x) * s] = mb[j+=1];
			res[(((y + 6) * w) + x + 1) * s] = mb[j+=1];
			res[(((y + 6) * w) + x + 2) * s] = mb[j+=1];
			res[(((y + 6) * w) + x + 3) * s] = mb[j+=1];
			res[(((y + 6) * w) + x + 4) * s] = mb[j+=1];
			res[(((y + 6) * w) + x + 5) * s] = mb[j+=1];
			res[(((y + 6) * w) + x + 6) * s] = mb[j+=1];
			res[(((y + 6) * w) + x + 7) * s] = mb[j+=1];
			res[(((y + 7) * w) + x) * s] = mb[j+=1];
			res[(((y + 7) * w) + x + 1) * s] = mb[j+=1];
			res[(((y + 7) * w) + x + 2) * s] = mb[j+=1];
			res[(((y + 7) * w) + x + 3) * s] = mb[j+=1];
			res[(((y + 7) * w) + x + 4) * s] = mb[j+=1];
			res[(((y + 7) * w) + x + 5) * s] = mb[j+=1];
			res[(((y + 7) * w) + x + 6) * s] = mb[j+=1];
			res[(((y + 7) * w) + x + 7) * s] = mb[j+=1];
		};
	};

	return res;
};

class PVCDecoder
{
	#previousFrames = [];

	#decodeIframe(data)
	{
		if(data.slice(3) !== [0, 0, 4, 4]) throw new Error("Not I-frame");
		const w = (data[4] << 8) | data[5];
		const h = (data[6] << 8) | data[7];
		const s = data[8];
		if(this.#previousFrames.length > 59) this.#previousFrames.pop();
		this.#previousFrames.unshift([...macroblock(data.slice(12, (w * h * s) + 12), w, h)]);
		return { w, h, s, data.slice(12, (w * h * s) + 12) };
	};

	#decodeDframe(data)
	{
		if(data.slice(3) !== [0, 255, 0, 255]) throw new Error("Not I-frame");
		const siz = (data[4] << 24) | (data[5] << 16) | (data[6] << 8) | data[7];
		const w = (data[8] << 8) | data[9];
		const h = (data[10] << 8) | data[11];
		const s = data[12];
		const f = data[13];
		const blocksize = (s * 256) + 1;
		const diff = [];
		const dt = data.slice(14, siz);
		for(var i = 0; i != dt.length; i += blocksize) diff.push([dt[i], dt.slice(i + 1, i + blocksize)]);
		const frame = this.#previousFrames[f];
		for(const block of diff) frame[block[0]] = block[1];
		return unmacroblock(frame, w, h, s);
	};
};
