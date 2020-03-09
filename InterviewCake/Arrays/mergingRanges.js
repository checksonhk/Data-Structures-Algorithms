/*
Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.In HiCal, a meeting is stored as a tuple ↴ of integers (start_time, end_time). These integers represent the number of 30-minute blocks past 9:00am.

Example: 
(2, 3)  # Meeting from 10:00 – 10:30 am
(6, 9)  # Meeting from 12:00 – 1:30 pm

Input: 
[(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
Output:
[(0, 1), (3, 8), (9, 12)]

*/

function mergeRanges(timeslots) {
  // time complexity worse case O(n log(n))
  const sortedTimeSlots = timeslots.sort((a, b) => a.startTime - b.startTime);

  // time complexity of O(n)
  const newTimeslots = sortedTimeSlots.reduce(
    (acc, timeslot) => {
      const lastMergedMeeting = acc[acc.length - 1];
      if (timeslot.startTime <= lastMergedMeeting.endTime) {
        acc[acc.length - 1] = { startTime: lastMergedMeeting.startTime, endTime: Math.max(lastMergedMeeting.endTime, timeslot.endTime) };
      } else {
        acc.push({ startTime: timeslot.startTime, endTime: timeslot.endTime });
      }
      return acc;
    },
    [sortedTimeSlots[0]],
  );

  return newTimeslots;
}

const timeslots = [
  { startTime: 5, endTime: 8 },
  { startTime: 1, endTime: 4 },
  { startTime: 6, endTime: 8 },
];

console.log(mergeRanges(timeslots));
