const meetingsData = [
    { startTime: 480, endTime: 600, participants: ['Alice', 'Bob'] },
    { startTime: 610, endTime: 720, participants: ['Charlie', 'David'] },
    { startTime: 730, endTime: 800, participants: ['Eve'] },
    { startTime: 480, endTime: 540, participants: ['Alice', 'Charlie'] },
    { startTime: 600, endTime: 660, participants: ['David'] },
    { startTime: 670, endTime: 720, participants: ['Bob', 'Eve'] },
  ];

  
  function findMeetingSlot(meetings, duration) {
    const highestEndTime = Math.max(...meetings.map(i => i.endTime))

    return {startDate: highestEndTime + 10, endTime: highestEndTime + duration}

}

console.log(findMeetingSlot(meetingsData, 80))
