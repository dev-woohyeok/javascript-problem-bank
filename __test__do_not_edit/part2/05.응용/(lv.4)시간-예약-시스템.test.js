import { scheduleNextAvailableTime } from '../../../part2/05.응용/(lv.4)시간-예약-시스템.js';

describe('(lv.4)시간-예약-시스템.js 테스트', () => {
	it('예약 목록이 비어 있으면 0부터 예약 가능해야 한다.', () => {
		const reservations = [];
		const timeLength = 2;
		const result = scheduleNextAvailableTime(reservations, timeLength);
		expect(result).toBe(0);
	});

	it('첫 예약 전 시간은 사용하지 않으므로, (0~첫예약.start)는 무시한다.', () => {
		const reservations = [{ start: 10, end: 12 }];
		const timeLength = 5;

		const result = scheduleNextAvailableTime(reservations, timeLength);
		expect(result).toBe(12);
	});

	it('인접한 예약 사이에 충분한 간격이 있으면 그 시점을 반환해야 한다.', () => {
		const reservations = [
			{ start: 10, end: 12 },
			{ start: 14, end: 15 },
		];
		const timeLength = 1;

		const result = scheduleNextAvailableTime(reservations, timeLength);
		expect(result).toBe(12);
	});

	it('모든 간격이 부족하면 마지막 예약 이후 시점을 반환한다.', () => {
		const reservations = [
			{ start: 2, end: 3 },
			{ start: 3, end: 6 },
		];
		const timeLength = 5;

		const result = scheduleNextAvailableTime(reservations, timeLength);
		expect(result).toBe(6);
	});

	it('연속되거나 겹친 예약들만 있을 때도 마지막 예약 이후 시점을 반환한다.', () => {
		const reservations = [
			{ start: 1, end: 2 },
			{ start: 2, end: 4 },
			{ start: 4, end: 7 },
		];
		const timeLength = 2;

		const result = scheduleNextAvailableTime(reservations, timeLength);
		expect(result).toBe(7);
	});

	it('timeLength가 커서 모든 간격이 부족할 때도 마지막 예약 이후 반환', () => {
		const reservations = [
			{ start: 2, end: 5 },
			{ start: 6, end: 7 },
		];
		const timeLength = 10;

		const result = scheduleNextAvailableTime(reservations, timeLength);
		expect(result).toBe(7);
	});
});
