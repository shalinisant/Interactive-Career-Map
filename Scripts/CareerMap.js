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
               relation: '<p><span style="font-size:14px;"><strong>Education: </strong></span></p>' +
'<ul><li><span style="font-size:12px;">Law School after Bachelor&rsquo;s degree, which requires passing the LSAT</span></li>' +
'<li><span style="font-size:12px;">Pass Provincial Bar exam after Law degree in order to practice law in a specific province/territory</span></li>' +
'<li><span style="font-size:12px;">Articling: working under supervision of licensed and qualified lawyer for 10 months, before being licensed to practice law</span></li></ul>' +
'<p><span style="font-size:14px;"><strong>Experience:</strong></span></p>' +
'<ul><li><span style="font-size:12px;">Reading, Speaking and Argumentation Skills should be developed when doing undergrad</span></li></ul>' +
'<p><strong><span style="font-size:14px;">Potential Careers:</span></strong></p><ul>' +
'<li><span style="font-size:12px;">Lawyer</span></li></ul>'
			},
            children: [{
                id: "a84_2",
                name: "Lawyer",
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
                relation: '<p><span style="font-size:14px;"><strong>Education:</strong></span></p>' +
'<ul><li><span style="font-size:12px;">Depending on the career, a Master&#39;s Degee may or may not be required</span></li></ul>' +
'<p><strong><span style="font-size:14px;">Experience</span></strong></p>' +
'<ul><li><span style="font-size:12px;">A strong sense of curiosity about other countries and cultures is necessary in order to develop and maintain relationships with potential business partners</span></li></ul>' +
'<p><strong><span style="font-size:14px;">Potential Jobs:</span></strong></p>' +
'<li><span style="font-size:12px;">Trade Commissioner</span></li>' +
'<li><span style="font-size:12px;">Import Agent</span></li></ul>'
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
'<p><span style="font-size:14px;"><strong>Education: </strong></span><span style="font-size:12px;">A Master&rsquo;s degree will help students gain real-world experience, as 3-5 years is necessary to be eligible for most entry-level positions.</span></p>' +
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
                id: "a50188_8",
                name: "Foreign Services Officer",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }, {
                id: "a65452_9",
                name: "Job 2",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
        }, {
            id: "a41529_12",
            name: "Finance",
            data: {
                relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
            },
            children: [{
                id: "a1756_13",
                name: "Commercial Banking",
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
                name: "Investment Banking",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
        }, {
            id: "a131161_18",
            name: "Development",
            data: {
                relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
            },
            children: [{
                id: "a1756_19",
                name: "Job 1",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }, {
                id: "a72007_20",
                name: "Job 2",
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
                name: "Job 1",
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
        }, {
            id: "a236585_30",
            name: "Research",
            data: {
                relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
            },
            children: [{
                id: "a1111_31",
                name: "Economic Policy Analyst",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }, {
                id: "a1756_32",
                name: "Job 2",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
        }, {
            id: "a236594_38",
            name: "Academic",
            data: {
                relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
            },
            children: [{
                id: "a2092_39",
                name: "Professor",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
        }, ],
        data: { 
			relation: '<p style="margin-top:200px"></p><p><span style="font-size: 14px;">Click on a career category to learn more about specific careers in the field, and requirements for those careers after a BIE degree.</span></p>'
		}
    };
    //end
    
    //init RGraph
    var rgraph = new $jit.RGraph({
        //Where to append the visualization
        injectInto: 'infovis',
		levelDistance: 130,
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
          color: '#C17878',
          lineWidth:3.5
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
