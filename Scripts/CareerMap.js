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
        name: "Economics Degree",
		//data: { 
			//relation: '<p><span style="font-size: 14px;">Click on a career category to learn more about specifc careers in the field, and requirements for those careers after a BIE degree.</span></p>'
		//},
        children: [{
            id: "k306208_1",
            name: "Law",
            data: {
               relation: '<p><span style="font-size:14px;"><strong>Education: </strong></span></p><ul><li><span style="font-size:12px;">Law School after Bachelor&rsquo;s degree, which requires passing the LSAT</span></li>' +
			   '<li><span style="font-size:12px;">Pass Provincial Bar exam after Law degree in order to practice law in a specific province/territory</span></li>' +
'<li><span style="font-size:12px;">Articling: working under supervision of licensed and qualified lawyer for 10 months, before being licensed to practice law</span></li></ul>' +
'<p><span style="font-size:14px;"><strong>Experience:</strong></span></p>' +
'<ul><li><span style="font-size:12px;">Reading, Speaking and Argumentation Skills should be developed when doing undergrad</span></li></ul>'
				
            },
            children: [{
                id: "a84_2",
                name: "Lawyer",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            },
			{
                id: "a14581_7",
                name: "Job 2",
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
'<ul><li><span style="font-size:12px;">Depending on the career, a Master&#39;s Degee may or may not be required</span></li></ul>'
            },
            children: [{
                id: "a964_4",
                name: "Trade Commissioner",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            },
			{
                id: "a1756_6",
                name: "Import Agent",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
        }, {
            id: "a236797_5",
            name: "Government",
            data: {
                relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
            },
            children: [{
                id: "a50188_8",
                name: "Job 1",
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
                name: "Job 1",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }, {
                id: "a14581_14",
                name: "Job 2",
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
            name: "Category 7",
            data: {
                relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
            },
            children: [{
                id: "a1111_31",
                name: "Job 1",
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
            name: "Category 8",
            data: {
                relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
            },
            children: [{
                id: "a2092_39",
                name: "Job 1",
                data: {
                    relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
                },
                children: []
            }]
        }, ],
        data: {
            relation: '<p><span style="font-size: 14px;">Still need to research</span></p>'
        }
    };
    //end
    
    //init RGraph
    var rgraph = new $jit.RGraph({
        //Where to append the visualization
        injectInto: 'infovis',
		levelDistance: 155,
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
			style.width = "100px"
		

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
    //$jit.id('inner-details').innerHTML = rgraph.graph.getNode(rgraph.root).data.relation;
}