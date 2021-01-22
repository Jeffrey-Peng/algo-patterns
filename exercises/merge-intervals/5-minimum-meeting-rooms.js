class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const minMeetingRooms = (meetings) => {
  // sort meetings by start time (use end time as secondary criteria)
  let startTimes = [];
  let endTimes = [];
  meetings.forEach((meeting) => {
    startTimes.push(meeting.start);
    endTimes.push(meeting.end);
  });

  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);

  let startPointer = 0;
  let endPointer = 0;
  let rooms = 0;

  while (startPointer < meetings.length) {
    if (startTimes[startPointer] >= endTimes[endPointer]) {
      endPointer++;
    } else {
      rooms++;
    }

    startPointer++;
  }

  return rooms;
};

// Tests
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
