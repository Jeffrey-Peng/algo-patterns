class Meeting {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}
}

const minMeetingRooms = (meetings) => {
	// your code here
};

console.log(
	minMeetingRooms([new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])
);

console.log(
	minMeetingRooms([new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])
);

console.log(
	minMeetingRooms([new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])
);

console.log(
	minMeetingRooms([
		new Meeting(4, 5),
		new Meeting(2, 3),
		new Meeting(2, 4),
		new Meeting(3, 5),
	])
);

console.log(
	minMeetingRooms([
		new Meeting(4, 5),
		new Meeting(2, 3),
		new Meeting(2, 4),
		new Meeting(3, 5),
		new Meeting(1, 12),
	])
);

console.log(
	minMeetingRooms([
		new Meeting(4, 5),
		new Meeting(2, 3),
		new Meeting(2, 4),
		new Meeting(3, 5),
		new Meeting(4, 5),
		new Meeting(2, 3),
		new Meeting(2, 4),
		new Meeting(3, 5),
	])
);
