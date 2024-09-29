    // Masala 1: Kitoblar haqida ma'lumot chiqarish
    function problem1() {
        const books = [
            { title: "Halqa", author: "Akrom Malik", read: false },
            { title: "Dunyoning ishlari", author: "O'tkir Hoshimov", read: true },
            { title: "Iymon", author: "Shayx Muhammad Sodiq Muhammad Yusuf", read: true }
        ];

        let result = "";
        books.forEach(book => {
            result += `${book.author} ning "${book.title}" kitobi ${book.read ? "o'qilgan" : "o'qilmagan"}<br>`;
        });

        document.getElementById("output").innerHTML = result;
        console.log(result);
    }

    // Masala 2: Stringlar uzunligini chiqarish
    function problem2() {
        const words = ["text", "world", "laptop"];
        let result = "";

        words.forEach(word => {
            result += `${word}: ${word.length} harf<br>`;
        });

        document.getElementById("output").innerHTML = result;
        console.log(result);
    }

    // Masala 3: Qiymatlarni n martaga oshirish
    function problem3() {
        const obj = { a: 2, b: 3, c: 4 };
        const n = 3;
        let result = "";

        for (let key in obj) {
            result += `${key}: ${obj[key] * n}<br>`;
        }

        document.getElementById("output").innerHTML = result;
        console.log(result);
    }

    // Masala 4: 2 ning dastlabki n ta darajasini chiqarish
    function problem4() {
        const n = 4;
        let result = [];

        for (let i = 1; i <= n; i++) {
            result.push(Math.pow(2, i));
        }

        document.getElementById("output").innerHTML = result.join(', ');
        console.log(result);
    }

    // Masala 5: Bir xil so'zlarni sanash
    function problem5() {
        const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
        const count = {};

        animals.forEach(animal => {
            count[animal] = (count[animal] || 0) + 1;
        });

        let result = JSON.stringify(count);
        document.getElementById("output").innerHTML = result;
        console.log(result);
    }

    // Masala 6: Array elementlarining kvadratlari
    function problem6() {
        const numbers = [1, 2, 3, 4, 5];
        const result = numbers.map(num => num * num);
        document.getElementById("output").innerHTML = result.join(', ');
        console.log(result);
    }

    // Masala 7: Musbat sonlar yig'indisi
    function problem7() {
        const nums = [1, -4, 12, 0, -3, 29, -150];
        const result = nums.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
        document.getElementById("output").innerHTML = result;
        console.log(result);
    }

    // Masala 8: So'zlarning bosh harflari
    function problem8() {
        const name = 'George Raymond Richard Martin';
        const result = name.split(' ').map(word => word[0]).join('');
        document.getElementById("output").innerHTML = result;
        console.log(result);
    }

    // Masala 9: Eng yosh va eng qarilarning farqi
    function problem9() {
        const people = [
            { name: 'John', age: 13 },
            { name: 'Mark', age: 56 },
            { name: 'Rachel', age: 45 },
            { name: 'Nate', age: 67 },
            { name: 'Jeniffer', age: 65 }
        ];

        people.sort((a, b) => a.age - b.age);
        const ageDifference = people[people.length - 1].age - people[0].age;
        document.getElementById("output").innerHTML = ageDifference;
        console.log(ageDifference);
    }

    // Masala 10: Takrorlanmagan elementlarni topish
    function problem10() {
        function singleNumber(nums) {
            const counts = nums.reduce((acc, num) => {
                acc[num] = (acc[num] || 0) + 1;
                return acc;
            }, {});
            return Object.keys(counts).filter(key => counts[key] === 1).join(', ');
        }

        const result = singleNumber([4, 1, 2, 1, 2, 9, true]);
        document.getElementById("output").innerHTML = result;
        console.log(result);
    }
