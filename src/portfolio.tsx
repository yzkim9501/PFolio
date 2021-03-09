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
	subTitle: "subtitle for skill",
	describeSkills: [
		emoji("✔ describe first"),
		emoji("✔ describe second"),
		emoji("✔ describe third"),
		emoji("✔ describe forth"),
		emoji("✔ describe fifth"),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-java", text: "java", proficiency: 90},
		{fontAwesome: "fab fa-c", text: "c", proficiency: 90},
		{fontAwesome: "fab fa-dhtmlx", text: "dhtmlx", proficiency: 90},
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

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: false
}

export const projects = {
	title: emoji("Personal Projects 💻"),
	subTitle: "사내 개인 프로젝트 진행",
	lists: [
		{
			title: "REST API Agent",
			desc: "Spring boot를 이용하여, 서버실 측정 값(온도, 습도 등)을 Huawei 서버에서 주기적으로 받아가게 할 수 있는 REST API 설계 및 개발",
			url: "#"
		},
		{
			title: "REST Mockup Server",
			desc: "사내 간단한 REST API 테르트를 위해, url과 리턴할 data를 입력하면 해당 데이터를 표출하는 간단한 목업서버 설계 및 개발",
			url: "#"
		},
		{
			title: "BACnet Virtual Monitoring System",
			desc: "Spring boot를 이용하여, 가상의 장비가 BACnet 프로토콜로 타 장비에 서버실 측정값(온도, 습도 등)을 전송할 수 있도록 하는 프로그램 작성",
			url: "#"
		}
	],
	view: true
}

export const achievements = {
	title: emoji("Technical Writing 🏆"),
	subTitle: "사내 기획 및 매뉴얼 작성, 인증 작업",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "GS인증",
			desc: "사내 제품에 대한 GS 인증 진행, 매뉴얼 작성 및 프로그램 앞단 - 뒷단 수정"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "한글/영문 매뉴얼 작업",
			desc: "약 100페이지에 달하는 회사 프로그램 한글 및 영문 매뉴얼 작업 진행."
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "한국서부발전 실시간 모니터링 어플리케이션 기획 작업",
			desc: "한국서부발전에서 사용할 사내 어플리케이션 최초 기획 및 목업 작성"
		},
	],
	view: true
};

export const blogs = {
	title: emoji("사내 단체 프로젝트 📰"),
	subTitle: "사내 프로그램 개발 및 유지보수 작업",
	lists: [
		{
			title: "공지사항 게시판",
			desc: "Spring, JAVA를 이용한 서부발전 모니터링 시스템에 각 발전소 관리자들이 권한에 따른 공지사항을 작성하고 볼 수 있도록 설계 및 개발",
			url: "#"
		},
		{
			title: "MK119 프로그램 각종 유지보수",
			desc: "서버실에서 수집하는 장비에 대한 전체적인 보고서 작성 시스템 개발 작업 진행",
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