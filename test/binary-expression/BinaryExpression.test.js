const { evaluate } = require("../../lib");

function deepEqual(a, b) {
	expect(a).toEqual(b);
}

test("+", () => {
	const num = evaluate(
		`
1 + 2;
  `
	);
	deepEqual(num, 3);
});

test("+=", () => {
	const num = evaluate(
		`
var a = 1;
var b = 2;
a += 2;

  `
	);
	deepEqual(num, 3);
});

test("-", () => {
	const num = evaluate(
		`
 2 - 1;
  `
	);
	deepEqual(num, 1);
});

test("-=", () => {
	const num = evaluate(
		`
var a = 1;
var b = 2;
a -= 2;

  `
	);
	deepEqual(num, -1);
});

test("*", () => {
	const num = evaluate(
		`
 2 * 1;
  `
	);
	deepEqual(num, 2);
});

test("*=", () => {
	const num = evaluate(
		`
var a = 1;
var b = 2;
a *= 2;

  `
	);
	deepEqual(num, 2);
});

test("/", () => {
	const num = evaluate(
		`
 2 / 1;
  `
	);
	deepEqual(num, 2);
});

test("/=", () => {
	const num = evaluate(
		`
var a = 1;
var b = 2;
a /= 2;

  `
	);
	deepEqual(num, 0.5);
});

test("%", () => {
	const num = evaluate(
		`
 2 % 1;
  `
	);
	deepEqual(num, 0);
});

test("%=", () => {
	const num = evaluate(
		`
var a = 1;
var b = 2;
a %= 2;

  `
	);
	deepEqual(num, 1);
});

test(">", () => {
	const output = evaluate(
		`
 2 > 2;
  `
	);
	deepEqual(output, false);
});

test(">=", () => {
	const output = evaluate(
		`
 2 >= 2;
  `
	);
	deepEqual(output, true);
});

test("<", () => {
	const output = evaluate(
		`
 2 < 2;
  `
	);
	deepEqual(output, false);
});

test("<=", () => {
	const output = evaluate(
		`
 2 <= 2;
  `
	);
	deepEqual(output, true);
});

test(">>", () => {
	const output = evaluate(
		`
 2 >> 2;
  `
	);
	deepEqual(output, 0);
});

test(">>>", () => {
	const output = evaluate(
		`
 2 >>> 2;
  `
	);
	deepEqual(output, 0);
});

test("<<", () => {
	const output = evaluate(
		`
 2 << 2;
  `
	);
	deepEqual(output, 8);
});

test("&", () => {
	const output = evaluate(
		`
 2 & 2;
  `
	);
	deepEqual(output, 2);
});

test("|", () => {
	const output = evaluate(
		`
 2 | 2;
  `
	);
	deepEqual(output, 2);
});
