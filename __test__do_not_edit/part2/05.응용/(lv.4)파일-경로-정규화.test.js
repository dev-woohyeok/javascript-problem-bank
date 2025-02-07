import { normalizePath } from '../../../part2/05.응용/(lv.4)파일-경로-정규화.js';

describe('(lv.4)파일-경로-정규화.js 테스트', () => {
	it("중간에 '..'가 포함되면 상위 디렉토리로 이동해야 한다.", () => {
		expect(normalizePath('/a/b/../c')).toBe('/a/c');
		expect(normalizePath('/a/../../b')).toBe('/b');
	});

	it("'.'는 무시되어야 한다.", () => {
		expect(normalizePath('./a//b/./c/')).toBe('a/b/c/');
		expect(normalizePath('/./')).toBe('/');
	});

	it("중복된 '/'는 하나로 합쳐야 한다.", () => {
		expect(normalizePath('///a////b///')).toBe('/a/b/');
		expect(normalizePath('////')).toBe('/');
	});

	it("시작 '/'가 있으면 유지해야 한다.", () => {
		expect(normalizePath('/a/b')).toBe('/a/b');
		expect(normalizePath('/')).toBe('/');
	});

	it("끝 '/'가 있으면 유지해야 한다 (단, 루트 '/'는 예외).", () => {
		expect(normalizePath('/a/b/')).toBe('/a/b/');
		expect(normalizePath('a/b/')).toBe('a/b/');
		// 루트 "/"는 이미 끝, 그대로 "/"
		expect(normalizePath('/./')).toBe('/');
	});

	it('상위 폴더를 계속 올려도 루트 이상은 처리하지 않는다 (이 예시는 현재 구현에서 무시).', () => {
		// 예: "/../../.." -> "/"
		expect(normalizePath('/../../..')).toBe('/');
	});
});
