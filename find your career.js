document.getElementById('career-quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const answers = [
        document.getElementById('education').value,
        document.getElementById('interest').value,
        document.getElementById('activity').value,
        document.getElementById('skill').value,
        document.getElementById('decision-style').value,
        document.getElementById('stability').value,
    ];

    const suggestedCourse = calculateCareerPoints(answers);
    document.getElementById('result').innerText = `Your ideal career course is: ${suggestedCourse}`;
});

function calculateCareerPoints(answers) {
    const points = {
        'Full Stack Development Course': 0,
        'Data Science & Machine Learning Course': 0,
        'Python Programming Course': 0,
        'Software Testing Course': 0,
        'Practical Accounting Course': 0,
        'SAP FICO Course': 0,
        'SAP MM Course': 0,
        'Digital Marketing Course': 0,
        'Performance Marketing Course': 0,
        'Montessori Teacher Training': 0,
        'Yoga Teacher Training': 0,
        'Quantity Survey Course': 0,
        'MEP Course': 0,
        'Oil and Gas Course': 0,
        'Stock Market Course': 0,
    };

    const educationMap = {
        'Engineering or science graduate': new Set([
            'Full Stack Development Course', 'Data Science & Machine Learning Course', 'Python Programming Course',
            'Software Testing Course', 'Quantity Survey Course', 'MEP Course', 'Oil and Gas Course']),
        'Three-year diploma holder': new Set([
            'Full Stack Development Course', 'Data Science & Machine Learning Course', 'Python Programming Course',
            'Software Testing Course', 'Quantity Survey Course', 'MEP Course', 'Oil and Gas Course']),
        'Commerce graduate': new Set([
            'Practical Accounting Course', 'SAP FICO Course', 'Stock Market Course']),
        'Arts graduate': new Set([
            'Digital Marketing Course', 'Montessori Teacher Training', 'Yoga Teacher Training']),
        'High school graduate': new Set([
            'Project Management', 'Montessori Teacher Training', 'Yoga Teacher Training', 'Digital Marketing Course']),
        'Other': new Set([
            'Project Management', 'Montessori Teacher Training', 'Yoga Teacher Training', 'Digital Marketing Course'])
    };

    const interestMap = {
        'Web Development': 'Full Stack Development Course',
        'Data Analysis': 'Data Science & Machine Learning Course',
        'Software Testing': 'Software Testing Course',
        'Machine Learning': 'Data Science & Machine Learning Course',
        'Project Management': 'Project Management',
        'Accounting': 'Practical Accounting Course',
        'Marketing': new Set(['Digital Marketing Course', 'Performance Marketing Course']),
        'Teaching': 'Montessori Teacher Training',
        'Health and Wellness': 'Yoga Teacher
