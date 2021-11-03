throttleExecutor() {
    if (this.queue.length > 0) {
        const request = this.queue.shift();
        const { options, resolve, reject } = request;
        fetchData(options)
            .then(rep => resolve(rep))
            .catch(r => reject(e))
            .finally(() => {
                throttleExecutor();
            })
    }
}

throttleHeavyAPICalls(options) {
    const promise new Promise(resolve, reject => {
        this.queue.push({
            options,
            resolve,
            reject,
        })
    })
    throttleExecutor();
}

fetchData(options) {

}