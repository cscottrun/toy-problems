function bubble (arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i+1]) {
			[[arr[i]], [arr[i+1]]] = [[arr[i+1]], [arr[i]]]
			return bubble(arr)
		}
	}
  return arr

}

module.exports = {bubble}