import test from "ava";
// import riff from "./cli";

test("riff", (test) => {
  test.throws(
    () => {
      // riff(123);
    },
    {
      instanceOf: TypeError,
      message: "Expected a string, got number",
    },
  );

  // test.is(riff("unicorns"), "unicorns & rainbows");
});
