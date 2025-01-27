/**
 * [(lv.5)retry.js]
 *
 * - retryRequest 함수를 작성하세요.
 * - promiseFactory()가 실패하면 최대 retries 번까지 재시도합니다.
 * - 성공하면 resolve된 값을 반환하고, 실패하면 마지막 에러를 reject합니다.
 *
 * @param {() => Promise<any>} promiseFactory
 * @param {number} retries
 * @returns {Promise<any>}
 */

// async function retryRequest(promiseFactory, retries) {
// 	let retryCount = 0;
// 	while (retryCount <= retries) {
// 		try {
// 			const result = await promiseFactory();
// 			return result;
// 		} catch (error) {
// 			if (retryCount === retries) {
// 				throw error;
// 			}
// 			retryCount++;
// 		}
// 	}
// }

function retryRequest(promiseFactory, retries) {
	return new Promise((resolve, reject) => {
		const retryRequest = () => {
			promiseFactory()
				.then(resolve)
				.catch((error) => {
					if (retries === 0) {
						reject(error);
					} else {
						retries--;
						retryRequest();
					}
				});
		};
		retryRequest();
	});
}

// export 를 수정하지 마세요.
export { retryRequest };
