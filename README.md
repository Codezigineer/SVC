# SVC

A fast, small, and simple codec.


# Explanation

## I-frames

They start with the bytes 0x00, 0x00, 0x04, 0x04, with width (16-bit, LE), height (16-bit, LE) and stride (8-bit). The stride is 3 for YUV444, and 2 for YUV420, 1 for grayscale. It then ends with a pad of 3 bytes, and the frame data.

They are intraframes, and the video starts with one. It must.

## D-frames

D-frames store the difference between any of the previous 60 frames. The difference is calculated by finding the macroblocks (8x8) that are different (the equality function run on the previous frame's macroblock, and the current frame's macroblock), and storing them. It goes through all the previous 60 frames (replaced by black if nonexistent), and only stores the difference between one of the 60 frames that is smallest (the difference that is smallest.)
Then, it stores what frame the difference is of. (for decoding purposes, and it stores the frame number.)

They start with the bytes 0x00, 0xFF, 0x00, 0xFF, the size of the frame data (including header, 32-bit, LE), with width (16-bit, LE), height (16-bit, LE), stride (8-bit), the current frame's number (if this is the 3rd frame being encoded, then this is 3) - one of the previous frame's number.

Each different macroblock is stored with the macroblock number (32-bit, LE), and then the data.

Also, if the equality function that compares macroblocks is strict (the two macroblocks are 100% equal), then the encoder is lossless. However, if that is false, then it is lossy.
