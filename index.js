// code your solution here
function superbowlWin(record) {
	const win = record.find((year) => year.result === "W");
	return win ? win.year : undefined;
}