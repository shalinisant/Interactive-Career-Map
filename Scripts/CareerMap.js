var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data
    var json = {
        id: "abc",
        name: "International Economics Degree",
        children: [{
            id: "k306208_1",
            name: "Law",
            data: {
               relation: '<p><span style="font-size:14px;"><strong>What further education is needed for a career in this field? </strong></span></p>' +
'<ul><li><span style="font-size:12px;">Law School after Bachelor&rsquo;s degree, which requires passing the LSAT</span></li>' +
'<li><span style="font-size:12px;">Pass Provincial Bar exam after Law degree in order to practice law in a specific province/territory</span></li>' +
'<li><span style="font-size:12px;">Articling: working under supervision of licensed and qualified lawyer for 10 months, before being licensed to practice law</span></li></ul>' +
'<p><span style="font-size:14px;"><strong>What skills/experience will be useful to have?</strong></span></p>' +
'<ul><li><span style="font-size:12px;">Reading, Speaking and Argumentation Skills should be developed when doing undergrad</span></li></ul>' +
'<p><strong><span style="font-size:14px;">Potential Careers:</span></strong></p><ul>' +
'<li><span style="font-size:12px;">Lawyer</span></li></ul>'
			},
            children: [{
                id: "a84_2",
                name: "Attorney",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a14583_7",
                name: "Canadian Law",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            },
			{
                id: "a16583_7",
                name: "International Law",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
        },
			{
                id: "a14581_7",
                name: "Paralegal",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
        }, {
            id: "c107877_3",
            name: "International Trade",
            data: {
                relation: '<p><span style="font-size:14px;"><strong>What further education is required for a career in this field? </strong></span></p>' +
'<p><span style="font-size:12px;">Depending on the specific job, a Master&#39;s degree may or may not be required.</span></p>' +
'<p><span style="font-size:14px;"><strong style="font-size: 14px;">What additional experiences/skills will be useful to have?</strong></span></p>' +
'<p><span style="font-size:12px;">Curiosity for other countries and cultures, as well as a strong sense of integrity are needed to be successful in this industry.</span></p>' +
'<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:12px;"> A strong sense of integrity</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Focused on client service &ndash; bringing economic prosperity and growth to Canada, and the Canadian business community is a primary goal of this industry</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Flexible and adaptable &ndash; work will be in challenging situations often, one needs to be able to adapt to the changing needs of the position</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Excellent communicators &ndash; representatives of Canada, need to use effective methods to convey ideas</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Network and alliance builders &ndash; need to grow your own network, and help Canadian businesses have access to the right connections</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Able to just show sound judgement &ndash; work will involve identifying crucial issues, and coming up with logical solutions. Decisions made after analyzing complex situations can have significant impact on the country</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Natural team players &ndash; need to utilize strengths of colleagues and partners</span></p>' +
'<p><span style="font-size:12px;">Info taken from: <a href="http://www.international.gc.ca/jobs-emplois/trade-commerce.aspx?lang=eng">http://www.international.gc.ca/jobs-emplois/trade-commerce.aspx?lang=eng</a></span></p>'
            },
            children: [{
                id: "a964_4",
                name: "Trade Commissioner",
                data: {
                    relation: '<p><span style="font-size:14px;"><strong>Job Description:</strong></span>' +
					'<span style="font-size:12px;"> Trade commissioners build strategic relationships with international business partners, and help domestic firms access connections to the international market</span></p>'
                },
                children: []
            },
			{
                id: "a1756_6",
                name: "International Trade Specialist",
                data: {
                    relation: '<p><span style="font-size:14px;"><strong>Job Description:</strong></span> <span style="font-size:12px;">International trade specialists are responsible for analyzing and evaluating information pertaining to foreign trade.</span></p>' +
'<p><span style="font-size:14px;"><strong>Education/Experience: </strong></span><span style="font-size:12px;">A Master&rsquo;s degree will help students gain real-world experience, as 3-5 years is necessary to be eligible for most entry-level positions.</span></p>' +
'<ul><li><span style="font-size:12px;">Strong problem solving</span></li><li><span style="font-size:12px;">Written and verbal communication</span></li>' +
'<li><span style="font-size:12px;">Ability to multitask and prioritize</span></li><li><span style="font-size:12px;">Attention to detail</span></li>' +
'<li><span style="font-size:12px;">Organizational skills</span></li><li><span style="font-size:12px;">Customer service skills</span></li>' +
'<li><span style="font-size:12px;">Certification is not necessary, but may increase range of job opportunities</span></li></ul>' +
'<p style="margin-left:1.0in;"><span style="font-size:12px;">o&nbsp;&nbsp; Ex. Certified International Trade Professional Credential (CITP)</span></p>' +
'<p><span style="font-size:14px;"><strong>Salary: </strong></span><span style="font-size:12px;">The median salary is about $80,000 to 90,000 per year.</span></p>'

                },
                children: []
            }]
        }, {
            id: "a236797_5",
            name: "Government",
            data: {
                relation: '<p><span style="font-size:14px;"><strong>Education: </strong></span><span style="font-size:12px;">Generally a Bachelor&#39;s Degree is sufficient</span></p>' +
				'<p><span style="font-size:14px;"><strong>Experience:</strong></span></p>' +
'<ul><li><span style="font-size:12px;">Some entry-level jobs may require at least 3 years of prior related experience</span></li>' +
'<li><span style="font-size:12px;">In Canada, students wishing to experience firsthand a career in government can apply for the Federal Student Work Experience Program (FSWEP)</span></li></ul>'
            },
            children: [{
                id: "a14581_123",
                name: "Federal Bank",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a1756_618",
                name: "Policy Advisor",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
            }, {
                id: "a14581_102",
                name: "Non-Profit",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a1756_625",
                name: "Job",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
            }, {
                id: "a14581_121",
                name: "Foreign Affairs and International Relations",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a50188_8",
                name: "Foreign Services Officer",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
            }, {
                id: "a14581_147",
                name: "Intelligence Agency",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a1756_699",
                name: "Intelligence Officer",
                data: {
                    relation: '<p><span style="font-size:14px;"><strong>Education:</strong> </span><span style="font-size:12px;">Only a bachelor&rsquo;s degree is required for this position, in any field from a recognized university.</span></p>' +
'<p><span style="font-size:14px;"><strong>Experience:</strong></span></p>' +
'<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:12px;">&nbsp; Strong interpersonal skills are necessary</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; You will have to work both independently, on tasks such as conducting research, as well as part of a team, developing networks</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Experience travelling domestically and/or internationally is not necessary, but is good to have</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Knowledge of a foreign language is also a plus point</span></p>' +
'<p><span style="font-size:14px;"><strong>Salary:&nbsp;</strong></span>The starting salary is about $65,000.</p>' +
'<p><span style="font-size:12px;">Info taken from: <a href="https://csiscareers.ca/en/jobs/intelligence-officer">https://csiscareers.ca/en/jobs/intelligence-officer</a></span></p>' +
'<p>&nbsp;</p><p>&nbsp;</p>'
                },
                children: []
            }]
            }]
        }, {
            id: "a41529_12",
            name: "Finance",
            data: {
                relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
            },
            children: [{
                id: "a1756_13",
                name: "Corporate or Institutional",
                data: {
                    relation: '<p><span style="font-size:14px;"><strong>Education:</strong></span> <span style="font-size:12px;">Many high-ranking people who work in the commercial banking sector have an MBA, although it is not mandatory.</span></p>' +
'<p><span style="font-size:14px;"><strong>Skills/Experience:</strong></span></p>' +
'<ul><li><span style="font-size:12px;">Broad understanding of business and people skills</span></li>' +
'<li><span style="font-size:12px;">Accounting and writing skills are crucial for documenting loans and justifying credit analyses</span></li>' +
'<li><span style="font-size:12px;">One&#39;s work ethic more important than high GPA,</span></li>' +
'<li><span style="font-size:12px;">Need to be detail oriented, unafraid to sell and conscientious</span></li>' +
'<li><span style="font-size:12px;">Excellent communication and sales skills</span></li></ul>'
                },
                children: [{
                id: "a2192_39",
                name: "Credit Analyst",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
            }, {
                id: "a14581_14",
                name: "Retail",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a1756_69",
                name: "Advisory",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }, {
                id: "a1756_69",
                name: "Transactional",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
            }, {
                id: "c14581_14",
                name: "Back Office",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a1726_69",
                name: "Operations",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
            }, {
                id: "c14581_18",
                name: "Middle Office",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a1706_69",
                name: "Compliance",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }, {
                id: "a1366_69",
                name: "Risk Management",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
            }]
        }, {
            id: "a131161_18",
            name: "Development",
            data: {
                relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
            },
            children: [{
                id: "a1756_19",
                name: "Economic Development Officer",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }, {
                id: "a72007_20",
                name: "Business Development Specialist",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }, {
                id: "a78007_20",
                name: "Urban/Regional Planner",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
        }, {
            id: "a236583_23",
            name: "Economy",
            data: {
                relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
            },
            children: [{
                id: "a1744_24",
                name: "Economist",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }, {
                id: "a1756_25",
                name: "Job 2",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
        },  {
            id: "a236594_38",
            name: "Academia",
            data: {
                relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
            },
            children: [{
                id: "c14581_136",
                name: "Research",
                data: {
                    relation: '<p><strong><span style="font-size:14px;">What further education is required for a career in this field?</span></strong></p>' +
'<p>&nbsp;</p>' +
'<p><span style="font-size:12px;">A master&rsquo;s degree used to be an asset for careers in this field, but is now required for many positions with high levels of responsibility.</span></p>'
                },
                children: [{
                id: "a1111_31",
                name: "Economic Policy Analyst",
                data: {
                    relation: '<p><span style="font-size: 14px;"><p><span style="font-size:14px;"><strong>Job Description: </strong></span><span style="font-size:12px;">Economic Policy Analysts conduct research, and develop models to help explain economic trends and pattern. They use this information to advise on a variety of matters, including finance, fiscal and monetary policy, international trade and industrial markets.</span></p>' +
'<p><span style="font-size:14px;"><strong>Education:</strong> </span><span style="font-size:12px;">A master&rsquo;s degree with at least a concentration in economics will be required for positions with high responsibility.&nbsp;</span></p></span></p>'
                },
                children: []
            }]
            }, {
                id: "c14581_139",
                name: "Universities",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a1706_199",
                name: "Investment Banking Analyst",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
            }]
        },
{
            id: "a236194_38",
            name: "Consulting",
            data: {
                relation: '<p><span style="font-size:12px;">Economic consultants analyze any type of economic or financial issues a company may have, and provide solutions to these issues. Most start out as analysts at consulting firms, and work their way up to positions such as senior economist, or even partner, as they gain more experience and or/education.</span></p>' +
'<p><span style="font-size:14px;"><strong>Education Requirements: </strong></span>Specific knowledge in the intended area of consulting, in addition to a bachelor&rsquo;s degree, is necessary for a successful career in this field.</p>' +
'<p><span style="font-size:14px;"><strong>Skills/Experience:</strong></span></p>' +
'<p style="margin-left:36.0pt;">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ability to view &ldquo;big picture&rdquo; of organization, and see how all parts fit together</p>' +
'<p style="margin-left:36.0pt;">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Excellent interpersonal skills, ability to relate to people from all levels of organization</p>' +
'<p style="margin-left:36.0pt;">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Effective communication is a key aspect of any consulting job, as you will be making connections very often, and will work with a variety of different people</p>' +
'<p style="margin-left:36.0pt;">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; One needs to be flexible, and able to adapt to various situations with ease</p>' +
'<p style="margin-left:36.0pt;">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Confidence to stand up for what you believe in, and grace to admit when you may be wrong</p>' +
'<p style="margin-left:36.0pt;">●&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Abilities to synthesize large amounts of information in a short period of time</p>'
            },
            children: [{
                id: "k24581_135",
                name: "Marketing",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a1706_693",
                name: "Marketing Consultant",
                data: {
                    relation: '<p>&nbsp;</p><p><span style="font-size:14px;"><strong>Job Description: </strong></span><span style="font-size:12px;">Marketing consultants help businesses market their products effectively.</span></p>' +
'<p><span style="font-size:14px;"><b>What further education is required for this career?</b></span></p>' +
'<p style="text-align: justify;"><span style="font-size:12px;">A bachelor&#39;s degree is sufficient to become a marketing consultant. Real world experience in the field of marketing will be needed prior to applying for this position.</span></p>' +
'<p><span style="font-size:14px;"><strong>What additional skills/experience are needed for this position?</strong></span></p>' +
'<p style="text-align: justify;"><span style="font-size:12px;">A marketing consultant is not an entry level job, years of marketing experience and knowledge are necessary. One needs to be able to have seen a variety of issues in various companies, and this only comes with experience. As well, one needs to be able to understand marketing needs of clients from a variety of different industries. The most sucessful marketing consultants have creative promotion ideas, as well as knowledge of the latest/most effective marketing technologies</span></p>' +
'<p><span style="font-size:14px;"><strong>&nbsp;What is the average salary for this career? &nbsp;&nbsp;</strong></span></p>' +
'<p><span style="font-size:12px;">Average starting salaries in Canada range anywhere from $34,070 to $40, 847, depending on location</span></p>' +
'<p>&nbsp;</p><p><span style="font-size:11px;">Info taken from:</span></p>' +
'<p><span style="font-size:11px;"><strong><a href="http://www.theguardian.com/careers/careers-blog/marketing-consultant">http://www.theguardian.com/careers/careers-blog/marketing-consultant</a></strong></span></p>' +
'<p><span style="font-size:11px;"><strong><a href="http://money.cnn.com/pf/best-jobs/2012/snapshots/2.html">http://money.cnn.com/pf/best-jobs/2012/snapshots/2.html</a></strong></span></p>' +
'<p><span style="font-size:11px;"><strong><a href="http://talentegg.ca/incubator/2014/09/28/average-starting-salaries-consulting-edition-2014/">http://talentegg.ca/incubator/2014/09/28/average-starting-salaries-consulting-edition-2014/</a></strong></span><strong></strong></p>' 

                },
                children: []
            }]
            }, {
                id: "k14681_181",
                name: "Management",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a1706_691",
                name: "Management Consultant",
                data: {
                    relation: '<p><span style="font-size:14px;"><strong>Job Description: </strong></span><span style="font-size:12px;">Management consultants help companies improve their efficiency, by providing management and operations recommendations. All types of organizations, such as corporate, non-profits and governments employ management consultants.</span></p>' +
'<p><span style="font-size:14px;"><strong style="font-size: 14px;">What additional skills/experience will be useful to have?</strong></span></p><p>&nbsp;</p>' +
'<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="font-size:12px;">Being an expert in a certain industry or field is not necessary for consulting, one just needs to be excellent at coming up with creative solutions to help companies better their performance</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Numeracy skills are crucial &ndash; one should be good with numbers, mental math and statistical analysis, however a degree in a mathematics related background is not necessary</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ability to think ina logical and structured way, while also being open to new knowledge and interpretations</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Excellent communication and interpersonal skills, as one will have to get along well with individuals both internally, and on the client side</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Analytical, problem-solving and quantitative skills</span></p>' +
'<p><span style="font-size:14px;"><strong>What is the average salary for this career?</strong></span></p>' +
'<p><span style="font-size:12px;">The average salary for a management consultant in Canada in 2015 is $78, 340.</span></p>' +
'<p>&nbsp;</p>' +
'<p><span style="font-size:11px;">Info taken from:</span></p>' +
'<p><span style="font-size:11px;"><a href="http://www.careers.ox.ac.uk/management-consultancy/">http://www.careers.ox.ac.uk/management-consultancy/</a></span></p>' +
'<p><span style="font-size:11px;"><a href="http://www.payscale.com/research/CA/Job=Management_Consultant/Salary">http://www.payscale.com/research/CA/Job=Management_Consultant/Salary</a></span></p>' 

                },
                children: []
            }]
            }, {
                id: "k14581_180",
                name: "Strategy",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a1706_692",
                name: "Strategy Consultant",
                data: {
                    relation: '<p><span style="font-size:14px;"><strong> Job Description: </strong></span><span style="font-size:12px;"> Strategy consultants help companies evaluate and improve business strategies and operations. In particular, they aim to help a company differentiate itself from the competition.</span></p>' +
'<p><span style="font-size:14px;"><strong>Required Skills/Experience:</strong></span></p>' +
'<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size:12px;">&nbsp;&nbsp; Experience with strategy consulting, or consulting in general, in addition to an undergraduate degree is generally required</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Strong analytical abilities</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Industry-specific expertise</span></p>' +
'<p><span style="font-size:14px;"><strong>Salary: </strong></span><span style="font-size:12px;">The average salary for a strategy consultant ranges anywhere from 59 000 to 160 000.</span></p>' +
'<p><span style="font-size:11px;">Info taken from:</span></p>' +
'<p><span style="font-size:11px;"><a href="https://www.glassdoor.ca/Salaries/strategy-consultant-salary-SRCH_KO0,19.htm">https://www.glassdoor.ca/Salaries/strategy-consultant-salary-SRCH_KO0,19.htm</a></span></p>' +
'<p><span style="font-size:11px;"><a href="http://www.bain.com/offices/brussels/en_us/careers/top-management-consulting.aspx">http://www.bain.com/offices/brussels/en_us/careers/top-management-consulting.aspx</a></span></p>' +
'<p><span style="font-size:11px;"><a href="http://www.caseinterview.com/strategy-consulting">http://www.caseinterview.com/strategy-consulting</a></span><strong></strong></p>'

                },
                children: []
            }]
            }, {
                id: "k14581_125",
                name: "Technology/IT",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a1706_671",
                name: "IT Consultant",
                data: {
                    relation: '<p><span style="font-size:14px;"><strong>Job Description:</strong> </span><span style="font-size:12px;">IT Consultants analyze, and provide solutions regarding the communication and software systems of an organization. Depending on the size and ability of the organization, consultants involvement in the organization can vary anywhere from installing and maintaining the system as needed, to solely providing solutions to technological issues.</span></p>' +
'<p><span style="font-size:14px;"><strong>Required Skills/Experience:</strong></span></p>' +
'<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="font-size:12px;">Need to have prior knowledge/interest in information technology</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Consultants with several years of industry experience are generally preferred by employers</span></p>' +
'<p><span style="font-size:14px;"><strong>Salary: </strong></span><span style="font-size:12px;">The average salary for an IT Consultant is $66,414/year.</span></p>' +
'<p><span style="font-size:11px;">Info taken from:</span></p>' +
'<p><span style="font-size:11px;"><a href="http://study.com/articles/IT_Business_Consultant_Job_Description_and_Education_Requirements.html">http://study.com/articles/IT_Business_Consultant_Job_Description_and_Education_Requirements.html</a></span></p>' +
'<p><span style="font-size:11px;"><a href="http://www.payscale.com/research/CA/Job=Information_Technology_(IT)_Consultant/Salary">http://www.payscale.com/research/CA/Job=Information_Technology_(IT)_Consultant/Salary</a></span></p>'
                },
                children: []
            }]
            }, {
                id: "k14581_129",
                name: "HR",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: [{
                id: "a1706_675",
                name: "HR Consultant",
                data: {
                    relation: '<p><span style="font-size:14px;"><strong>Job Description: </strong></span><span style="font-size:12px;">HR consultants evaluate and implement strategies to aid businesses with their human resources and labour relations policies.</span></p>' +
'<p><span style="font-size:14px;"><strong>Education:</strong></span> <span style="font-size:12px;">Generally, a degree in an area related to personnel management, such as business administration, commerce or psychology is required. However, completion of a professional development program in personnel administration may be considered as well.The Certified Human Resources Professional is one such designation.</span></p>' +
'<p><span style="font-size:14px;"><strong>Required Skills/Experience:</strong></span></p>' +
'<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="font-size:12px;">Requirements vary greatly depending on the company, but many positions in Canada require one to be bilingual</span></p>' +
'<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="font-size:12px;">Business accounting</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Executive hiring</span></p>' +
'<p><span style="font-size:12px;">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Knowledge of human resource software</span></p>' +
'<p>&nbsp;</p><p><span style="font-size:14px;"><strong>Salary:&nbsp;</strong></span>Currently, the median salary for an HR consultant is $63,195.</p>' +
'<p><span style="font-size:11px;">Info taken from:</span></p>' +
'<p><span style="font-size:11px;"><a href="http://www.servicecanada.gc.ca/eng/qc/job_futures/statistics/1121.shtml">http://www.servicecanada.gc.ca/eng/qc/job_futures/statistics/1121.shtml</a></span></p>' +
'<p><span style="font-size:11px;"><a href="http://work.chron.com/careers-hr-consulting-2948.html">http://work.chron.com/careers-hr-consulting-2948.html</a></span></p>' +
'<p><span style="font-size:11px;"><a href="https://ca.linkedin.com/jobs2/view/82512840?trk=jserp_job_details_text">https://ca.linkedin.com/jobs2/view/82512840?trk=jserp_job_details_text</a></span></p>' +
'<p><span style="font-size:11px;"><a href="http://www.payscale.com/research/CA/Job=Consultant,_Human_Resources_(HR)/Salary">http://www.payscale.com/research/CA/Job=Consultant,_Human_Resources_(HR)/Salary</a></span></p>'


                },
                children: []
            }]
            }]
        }		],
        data: { 
			relation: '<p style="margin-top:200px"></p><p><span style="font-size: 14px;">Click on a career category to learn more about specific careers in the field, and requirements for those careers after a BIE degree.</span></p>'
		}
    };
    //end
    
    //init RGraph
    var rgraph = new $jit.RGraph({
        //Where to append the visualization
        injectInto: 'infovis',
		levelDistance: 175,
        //Optional: create a background canvas that plots
        //concentric circles.
        background: {
          CanvasStyles: {
            strokeStyle: '#555'
          }
        },
        //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
          enable: true,
          panning: true,
          zooming: 10
        },
        //Set Node and Edge styles.
        Node: {
            color: '#ddeeff'
        },
        
        Edge: {
          color: '#666666',
          lineWidth:2.5
        },

        onBeforeCompute: function(node){
            Log.write("centering " + node.name + "...");
            //Add the relation list in the right column.
            //This list is taken from the data property of each JSON node.
            $jit.id('inner-details').innerHTML = node.data.relation;
        },
        
        //Add the name of the node in the correponding label
        //and a click handler to move the graph.
        //This method is called once, on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.onclick = function(){
                rgraph.onClick(node.id, {
                    onComplete: function() {
                        Log.write("done");
                    }
                });
            };
        },
        //Change some label dom properties.
        //This method is called each time a label is plotted.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';
			style.width = "90px"
		

            if (node._depth <= 1) {
                //style.fontSize = "0.8em";
                style.color = "#ccc";
            
            } else if(node._depth == 2){
                //style.fontSize = "0.7em";
                style.color = "#ccc";
            
            } else {
                style.display = 'none';
            }

            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        }
    });
    //load JSON data
    rgraph.loadJSON(json);
    //trigger small animation
    rgraph.graph.eachNode(function(n) {
      var pos = n.getPos();
      pos.setc(-200, -200);
    });
    rgraph.compute('end');
    rgraph.fx.animate({
      modes:['polar'],
      duration: 2000
    });
    //end
    //append information about the root relations in the right column
    $jit.id('inner-details').innerHTML = rgraph.graph.getNode(rgraph.root).data.relation;
}
