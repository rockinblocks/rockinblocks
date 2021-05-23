import test from "ava";
// import riff from "./cli";
test("riff", function (test) {
    test.throws(function () {
        // riff(123);
    }, {
        instanceOf: TypeError,
        message: "Expected a string, got number",
    });
    // test.is(riff("unicorns"), "unicorns & rainbows");
});
