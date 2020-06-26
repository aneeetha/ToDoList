module.exports.getDate = function() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
};
//can use expors.getDate alone also
//can create another function and access like the same
//date.getDate() or getDay()
//use __dirname + "/file.js" to require