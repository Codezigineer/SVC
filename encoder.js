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

class PVCEncoderLossless
{
	#previousFrames = [];
	
	encodeIframe(d, w, h)
	{
		if(this.#previousFrames.length > 59) this.#previousFrames.pop();
		this.#previousFrames.unshift(macroblock(d, w, h));
		return [0, 0, 4, 4, (w >> 8), (w & 0xFF), (h >> 8), (h & 0xFF), (d.byteLength / (w * h)) & 0xFF, 0, 0, 0 ...d];
	};

	encodeDframe(d, w, h)
	{
		let frame = 0;
		let diff = [];
		const mb = macroblocks(d, w, h);
		for(var curFrame = 0; i != curFrame.length; i++)
		{
			let diffCur = [];
			for(var curMB = 0; i != mb.length; i++) if(mb[curMB] === this.#previousFrames[curMB]) diffCur.push(...[curMB, ...mb[curMB]]);
			if(diffCur.length < diff.length) 
			{
				diff = diffCur;
				frame = curFrame;
			};
		};
		let base = [0, 255, 0, 255, 0, 0, 0, 0, (w >> 8), (w & 0xFF), (h >> 8), (h & 0xFF), (d.byteLength / (w * h)) & 0xFF, ...diff];
		base.push(...diff);
		if(this.#previousFrames.length > 59) this.#previousFrames.pop();
		this.#previousFrames.unshift(mb);
		base[7] = diff.length & 0xFF;
		base[6] = (diff.length >> 8) & 0xFF;
		base[5] = (diff.length >> 16) & 0xFF;
		base[4] = (diff.length >> 24) & 0xFF;
		return base;
	};
};

// You can make any lossy method you want. I recommend this one.
class PVCEncoderLossy
{
	#previousFrames = [];
	lossiness = 1; // 0-5
	
	#equal(mb1, mb2)
	{
		let actualLossiness = (this.lossiness + 3) * 0.325;
		if(actualLossiness < 1) actualLossiness = 1;
		let compareLevel = null;
		for(var i = 0; i != mb1.length; i++)
		{
			let div = mb1[i]/mb2[i];
			if(div < 1) div = 1/div;
			if(compareLevel === null) compareLevel = div;
			compareLevel += div;
			compareLevel /= 2;
		};
		return compareLevel < actualLossiness;
	};
	
	encodeIframe(d, w, h)
	{
		if(this.#previousFrames.length > 59) this.#previousFrames.pop();
		this.#previousFrames.unshift(macroblock(d, w, h));
		return [0, 0, 4, 4, (w >> 8), (w & 0xFF), (h >> 8), (h & 0xFF), (d.byteLength / (w * h)) & 0xFF, 0, 0, 0 ...d];
	};

	encodeDframe(d, w, h)
	{
		let frame = 0;
		let diff = [];
		const mb = macroblocks(d, w, h);
		for(var curFrame = 0; i != curFrame.length; i++)
		{
			let diffCur = [];
			for(var curMB = 0; i != mb.length; i++) if(this.#equal(mb[curMB], this.#previousFrames[curMB])) diffCur.push(...[curMB, ...mb[curMB]]);
			if(diffCur.length < diff.length) 
			{
				diff = diffCur;
				frame = curFrame;
			};
		};
		let base = [0, 255, 0, 255, 0, 0, 0, 0, (w >> 8), (w & 0xFF), (h >> 8), (h & 0xFF), (d.byteLength / (w * h)) & 0xFF, frame];
		base.push(...diff);
		if(this.#previousFrames.length > 59) this.#previousFrames.pop();
		this.#previousFrames.unshift(mb);
		return base;
	};
};
