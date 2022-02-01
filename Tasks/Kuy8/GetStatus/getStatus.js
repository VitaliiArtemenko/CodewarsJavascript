function getStatus(isBusy){
    return {status: isBusy ? 'busy' : 'available'};
}

module.exports = getStatus;