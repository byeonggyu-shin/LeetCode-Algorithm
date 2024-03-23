/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(0).map(() => []);
  const visited = new Array(numCourses).fill(false);
  const visiting = new Array(numCourses).fill(false);

  // 그래프 생성
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }

  function dfs(course) {
    if (visited[course]) return true; // 이미 방문한 강의인 경우
    if (visiting[course]) return false; // 사이클이 발생한 경우

    visiting[course] = true; // 현재 강의 방문 표시

    // 현재 강의의 후속 강의들을 DFS로 탐색
    for (const nextCourse of graph[course]) {
      if (!dfs(nextCourse)) return false;
    }

    visiting[course] = false; // 현재 강의 방문 완료
    visited[course] = true; // 현재 강의 완전 방문 표시
    return true;
  }

  // 모든 강의에 대해 DFS 수행
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
};
