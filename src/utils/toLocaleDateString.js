const options = {
        month: "long",
        day: "numeric",
        year: "numeric"
    }

exports.toLocaleDateString = function(date) {
    return new Date(date).toLocaleDateString('en-US', options)
}