// A. Basics with Promise

// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.

function helloAsync(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}

// Test thử Promise
helloAsync().then((result) => {
    console.log(result); // Kết quả: Hello Async (sau 2 giây)
});

// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.

function getNumberAsync(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

// Test thử Promise
getNumberAsync().then((result) => {
    console.log(result); // Kết quả: 10 (sau 1 giây)
});

// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.

function rejectAsync(): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}

// Test thử Promise
rejectAsync()
    .then((result) => {
        // Không chạy vào đây
    })
    .catch((error) => {
        console.log(error.message); // Kết quả: Something went wrong (sau 1 giây)
    });

// 4. Use .then() and .catch() to handle a Promise that returns a random number.

function getRandomNumberAsync(): Promise<number> {
    return new Promise((resolve, reject) => {
        const num = Math.random();
        // Giả sử nếu số nhỏ hơn 0.1 thì reject để test .catch()
        if (num < 0.1) {
            reject(new Error("Random number is too small!"));
        } else {
            setTimeout(() => {
                resolve(num);
            }, 500);
        }
    });
}

// Test thử Promise
getRandomNumberAsync()
    .then((result) => {
        console.log("Random number:", result);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });

// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.

function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

// Test thử Promise
simulateTask(1500).then((result) => {
    console.log(result); // Kết quả: Task done (sau 1.5 giây)
});

// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.

Promise.all([
    simulateTask(1000),
    simulateTask(1500),
    simulateTask(2000)
]).then((results) => {
    console.log("Kết quả Promise.all:", results); // ["Task done", "Task done", "Task done"]
});


// 7. Use Promise.race() to return whichever Promise resolves first.

Promise.race([
    simulateTask(1000),
    simulateTask(1500),
    simulateTask(2000)
]).then((result) => {
    console.log("Kết quả Promise.race:", result); // "Task done" (sau 1 giây)
});

// 8. Create a Promise chain: square the number 2, then double it, then add 5.

Promise.resolve(2)
    .then((num) => num * num)      // Bình phương: 2 ^ 2 = 4
    .then((num) => num * 2)        // Nhân đôi: 4 x 2 = 8
    .then((num) => num + 5)        // Cộng 5: 8 + 5 = 13
    .then((result) => {
        console.log("Kết quả Promise chain:", result); // Kết quả: 13
    });

// 9. Write a Promise that reads an array after 1 second and filters even numbers.

function filterEvenNumbersAsync(arr: number[]): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = arr.filter((num) => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
}

// Test thử Promise
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
filterEvenNumbersAsync(numbers).then((result) => {
    console.log("Các số chẵn:", result); // Kết quả: [2, 4, 6, 8] (sau 1 giây)
});

// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).

// Ví dụ với Promise thành công
getNumberAsync()
    .then((result) => {
        console.log("Kết quả:", result);
    })
    .catch((error) => {
        console.log("Lỗi:", error.message);
    })
    .finally(() => {
        console.log("Done");
    });

// Ví dụ với Promise thất bại
rejectAsync()
    .then((result) => {
        // Không chạy vào đây
    })
    .catch((error) => {
        console.log("Lỗi:", error.message);
    })
    .finally(() => {
        console.log("Done");
    });

// B. Async/Await

// 11. Convert Exercise 1 into async/await.

async function runHelloAsync() {
    const result = await helloAsync();
    console.log("Async/Await:", result); // Kết quả: Hello Async (sau 2 giây)
}

runHelloAsync();

// 12. Write an async function that calls simulateTask(2000) and logs the result.

async function runSimulateTask() {
    const result = await simulateTask(2000);
    console.log("Kết quả simulateTask:", result); // Kết quả: Task done (sau 2 giây)
}

runSimulateTask();

// 13. Handle errors using try/catch with async/await.

async function runRejectAsync() {
    try {
        const result = await rejectAsync();
        console.log("Kết quả:", result);
    } catch (error: any) {
        console.log("Lỗi với async/await:", error.message); // Kết quả: Something went wrong
    }
}

runRejectAsync();

// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.

async function multiplyByThreeAsync(num: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}

// Test thử
async function runMulti() {
    const result = await multiplyByThreeAsync(5);
    console.log("Kết quả multiAfter1Sec:", result); // Kết quả: 15 (sau 1 giây)
}

runMulti();

// 15. Call multiple async functions sequentially using await.

async function runSequentially() {
    const num1 = await multiplyByThreeAsync(2); // 2 * 3 = 6
    const num2 = await multiplyByThreeAsync(num1); // 6 * 3 = 18
    const num3 = await multiplyByThreeAsync(num2); // 18 * 3 = 54
    console.log("Kết quả chạy tuần tự:", num3); // Kết quả: 54
}

runSequentially();

// 16. Call multiple async functions in parallel using Promise.all().

async function runInParallel() {
    const results = await Promise.all([
        multiplyByThreeAsync(2), // 2 * 3 = 6
        multiplyByThreeAsync(3), // 3 * 3 = 9
        multiplyByThreeAsync(4)  // 4 * 3 = 12
    ]);
    console.log("Kết quả chạy song song:", results); // Kết quả: [6, 9, 12]
}

runInParallel();

// 17. Use for await...of to iterate over an array of Promises.

async function runForAwaitOf() {
    const promises = [
        multiplyByThreeAsync(1), // 1 * 3 = 3
        multiplyByThreeAsync(2), // 2 * 3 = 6
        multiplyByThreeAsync(3)  // 3 * 3 = 9
    ];

    for await (const result of promises) {
        console.log("Kết quả for await...of:", result);
    }
}

runForAwaitOf();

// 18. Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).

interface User {
    id: number;
    name: string;
}

async function fetchUser(id: number): Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User${id}` });
        }, 1000);
    });
}

// Test thử
async function runFetchUser() {
    const user = await fetchUser(1);
    console.log("Kết quả fetchUser:", user); // Kết quả: { id: 1, name: 'User1' } (sau 1 giây)
}
runFetchUser();


// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.

async function fetchUsers(ids: number[]): Promise<User[]> {
    const userPromises = ids.map((id) => fetchUser(id));
    return Promise.all(userPromises);
}

// Test thử
async function runFetchUsers() {
    const users = await fetchUsers([1, 2, 3]);
    console.log("Kết quả fetchUsers:", users); // Kết quả: [{ id: 1, name: 'User1' }, { id: 2, name: 'User2' }, { id: 3, name: 'User3' }]
}

runFetchUsers();

// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.

async function fetchUserWithTimeout(id: number, timeout: number = 2000): Promise<User> {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("Request timed out"));
        }, timeout);

        fetchUser(id)
            .then((user) => {
                clearTimeout(timer);
                resolve(user);
            })
            .catch((error) => {
                clearTimeout(timer);
                reject(error);
            });
    });
}

// Test thử
async function runFetchUserWithTimeout() {
    try {
        const user = await fetchUserWithTimeout(1, 1500); // Thời gian chờ 1.5 giây
        console.log("Kết quả fetchUserWithTimeout:", user);
    } catch (error: any) {
        console.log("Lỗi fetchUserWithTimeout:", error.message); // Kết quả: Request timed out (nếu quá 1.5 giây)
    }
}
runFetchUserWithTimeout();

// C. Fetch API & Simulated I/O

// 21. Use fetch to get data from a public API (e.g., https://jsonplaceholder.typicode.com/todos/1).

async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const todo = await response.json();
        console.log("Kết quả fetchTodo:", todo);
    } catch (error: any) {
        console.log("Lỗi fetchTodo:", error.message);
    }
}
fetchTodo();

// 22. Call the API multiple times and log the results.

async function fetchMultipleTodos() {
    const todoIds = [1, 2, 3, 4, 5];
    const fetchPromises = todoIds.map((id) =>
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
    );

    try {
        const todos = await Promise.all(fetchPromises);
        console.log("Kết quả fetchMultipleTodos:", todos);
    } catch (error: any) {
        console.log("Lỗi fetchMultipleTodos:", error.message);
    }
}
fetchMultipleTodos();

// 23. Write an async function that fetches a list of todos and filters out those that are not completed.

async function fetchAndFilterTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const todos = await response.json();
        const completedTodos = todos.filter((todo: any) => todo.completed);
        console.log("Kết quả fetchAndFilterTodos:", completedTodos);
    } catch (error: any) {
        console.log("Lỗi fetchAndFilterTodos:", error.message);
    }
}
fetchAndFilterTodos();

// 24. Write an async function postData() that sends a POST request to a test API.

async function postData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Kết quả postData:", data);
    } catch (error: any) {
        console.log("Lỗi postData:", error.message);
    }
}
postData();

// 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.

function downloadFile(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("File downloaded");
        }, 3000);
    });
}
async function runDownloadFile() {
    const result = await downloadFile();
    console.log(result); // Kết quả: File downloaded (sau 3 giây)
}
runDownloadFile();

// 26. Use async/await with setTimeout to simulate a 5-second wait.

async function waitFiveSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Waited 5 seconds");
        }, 5000);
    });
}
async function runWaitFiveSeconds() {
    const result = await waitFiveSeconds();
    console.log(result); // Kết quả: Waited 5 seconds (sau 5 giây)
}
runWaitFiveSeconds();

// 27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.

async function fetchWithRetry(url: string, retries: number): Promise<any> {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error: any) {
            console.log(`Attempt ${attempt} failed: ${error.message}`);
            if (attempt === retries) {
                throw new Error('All attempts failed');
            }
        }
    }
}
// Test thử
async function runFetchWithRetry() {
    try {
        const data = await fetchWithRetry('https://jsonplaceholder.typicode.com/todos/1', 3);
        console.log("Kết quả fetchWithRetry:", data);
    } catch (error: any) {
        console.log("Lỗi fetchWithRetry:", error.message);
    }
}
runFetchWithRetry();

// 28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).

async function batchProcess() {
    const tasks = [
        simulateTask(1000),
        simulateTask(1500),
        simulateTask(2000),
        simulateTask(2500),
        simulateTask(3000)
    ];

    const results = await Promise.all(tasks);
    console.log("Kết quả batchProcess:", results); // Kết quả: ["Task done", "Task done", "Task done", "Task done", "Task done"]
}
batchProcess();

// 29. Write an async function queueProcess() that processes tasks sequentially in a queue.

async function queueProcess() {
    const tasks = [
        () => simulateTask(1000),
        () => simulateTask(1500),
        () => simulateTask(2000),
        () => simulateTask(2500),
        () => simulateTask(3000)
    ];

    for (const task of tasks) {
        const result = await task();
        console.log("Kết quả queueProcess:", result); // Kết quả: Task done (lần lượt sau mỗi khoảng thời gian)
    }
}
queueProcess();

// 30. Use async/await + Promise.allSettled() to handle multiple API calls and display their success/failure status.

async function fetchWithStatus(urls: string[]) {
    const fetchPromises = urls.map((url) =>
        fetch(url).then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
    );

    const results = await Promise.allSettled(fetchPromises);
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Request to ${urls[index]} succeeded with data:`, result.value);
        } else {
            console.log(`Request to ${urls[index]} failed with reason:`, result.reason);
        }
    });
}
// Test thử
fetchWithStatus([
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/invalid-url', // URL không hợp lệ để test lỗi
    'https://jsonplaceholder.typicode.com/todos/3'
]);
// Kết quả: Hiển thị trạng thái thành công/thất bại của từng yêu cầu
