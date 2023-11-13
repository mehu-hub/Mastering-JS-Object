const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: [
        'calculas',
        'algebra',
        'geometry'
    ],
    exam: function () {
        return this.name + 'is participating in an exam';
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is taking improvemnet exam on ${subject}`
    },
    treatDey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const output = student.exam()
console.log(output)

const reExam = student.improveExam('Geometry')
console.log(reExam)

const remining = student.treatDey(800, 50);
console.log(remining)

const dolaReming = student.treatDey(500, 100);
console.log(dolaReming)
