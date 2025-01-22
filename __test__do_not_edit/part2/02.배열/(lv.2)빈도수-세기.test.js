import { getFrequency } from '../../../part2/02.배열/(lv.2)빈도수-세기.js';

describe('(lv.2)빈도수-세기.js 테스트', () => {
	it('배열이 비어있으면 빈 객체를 반환해야 한다.', () => {
		expect(getFrequency([])).toEqual({});
	});

	it('문자열 요소의 빈도를 정확히 계산해야 한다.', () => {
		const input = ['apple', 'banana', 'apple', 'orange'];
		expect(getFrequency(input)).toEqual({
			apple: 2,
			banana: 1,
			orange: 1,
		});
	});

	it('숫자 요소의 빈도도 올바르게 계산되어야 한다  .', () => {
		const input = [1, 2, 2, 3, 3, 3];
		expect(getFrequency(input)).toEqual({
			1: 1,
			2: 2,
			3: 3,
		});
	});

	it('다양한 자료형이 섞인 경우에도 빈도가 올바르게 계산되어야 한다.', () => {
		const input = [true, 'true', 1, '1', 1];
		expect(getFrequency(input)).toEqual({
			true: 1,
			true: 1,
			1: 2,
			1: 1,
		});
	});
});
