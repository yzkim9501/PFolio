import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Pray',
	title: 'Hello I\'m Yea Ji, Kim',
	subTitle: emoji("Developer ❤"),
	role: "Front-End Developer",
	resumeLink: "Your resume link... google drive or something else",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'Your github link',
	linkedin: 'Your linkedin link',
	email: 'yzkim9501@naver.com',
	facebook: 'Your facebook link',
	twitter: "Your twitter link",
	instagram: "Your instagram link",
	medium: 'Your medium link',
	stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "프론트, 백앤드 둘 다 가능합니다.",
	describeSkills: [
		emoji("✔ Spring-boot"),
		emoji("✔ dhtmlx"),
		emoji("✔ React"),
		emoji("✔ Java"),
		emoji("✔ Javascript")
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-seeding", text: "spring-boot", proficiency: 90},
		{fontAwesome: "fab fa-java", text: "java", proficiency: 90},
		{fontAwesome: "fab fa-copyright", text: "c", proficiency: 90},
		{fontAwesome: "fab fa-code", text: "dhtmlx", proficiency: 90},
		{fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80},
		{fontAwesome: "fab fa-js", text: "JS", proficiency: 80},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 60},
		{fontAwesome: "fab fa-python", text: "python", proficiency: 50},
		{fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 50},
		{fontAwesome: "fab fa-aws", text: "AWS", proficiency: 20},
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2016.03~2017.11",
			company: "LikeLion",
			role: "Lead Developer",
		},
		{
			date: "2018.03~",
			company: "Onionsoftware",
			role: "Full-stack developer",
		}
	],
	view: true
}

export const blogs = {
	title: emoji("이력 📰"),
	subTitle: "학력 사항",
	lists: [
		{
			title: "강화여자고등학교",
			desc: "2013년 3월 졸업",
			url: "#"
		},
		{
			title: "한국항공대학교",
			desc: "2018년 3월 졸업",
			url: "#"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "subtitle for contact",
	introduce: emoji("your introduce❤"),
	view: true
}