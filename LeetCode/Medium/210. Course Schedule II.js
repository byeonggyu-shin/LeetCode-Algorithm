/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const takenCourses = new Array(numCourses).fill(0).map(() => []);
  const indegree = new Array(numCourses).fill(0);

  // 인접 리스트 및 진입차수 계산
  for (const [course, prereq] of prerequisites) {
    takenCourses[prereq].push(course);
    indegree[course]++;
  }

  const queue = [];
  const result = [];

  // 진입차수가 0인 강의 큐에 추가
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const current = queue.shift();
    result.push(current);

    // 현재 강의를 듣고 나서 이어지는 강의들의 진입차수 감소 및 큐에 추가
    for (const next of takenCourses[current]) {
      indegree[next]--;
      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  // 모든 강의를 수강할 수 있는 경우 결과 반환
  if (result.length === numCourses) {
    return result;
  } else {
    return [];
  }
};
