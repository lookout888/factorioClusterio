
import spritesheetJson from "./../pictures/spritesheet.js";

export var entityDrawRules = {
	"big-electric-pole": {
		sizeInTiles: {
			x:2,
			y:2,
		},
		positionOffset: {
			x:-1,
			y:-1,
		}
	},
	"accumulator": {
		spritesheet: spritesheetJson.frames["images/factorio/entity/accumulator/accumulator.png"],
		sizeInTiles: {
			x:3.5,
			y:3.5,
		},
		positionOffset: {
			x:-1,
			y:-2,
		}
	},
	"radar": {
		spritesheet: spritesheetJson.frames["images/factorio/entity/radar/radar.png.22"],
		sizeInTiles: {
			x:4,
			y:4,
		},
		positionOffset: {
			x:-0.8,
			y:-1.7,
		},
	},
	"centrifuge": {
		spritesheet: spritesheetJson.frames["images/factorio/entity/centrifuge/centrifuge-A.png.0"],
		sizeInTiles: {
			x:4,
			y:4,
		},
		positionOffset: {
			x:-1.5,
			y:-1,
		},
	},
	"stone-furnace": {
		spritesheet: spritesheetJson.frames["images/factorio/entity/stone-furnace/stone-furnace.png"],
		sizeInTiles: {
			x:3,
			y:2.2,
		},
		positionOffset: {
			x:-0.9,
			y:-1,
		},
	},
	"steel-furnace": {
		spritesheet: spritesheetJson.frames["images/factorio/entity/steel-furnace/steel-furnace.png"],
		sizeInTiles: {
			x:2.5,
			y:2.5,
		},
		positionOffset: {
			x:-1.2,
			y:-1.1,
		},
	},
};
let template3x3entity = {
	sizeInTiles: {
		x:3,
		y:3,
	},
	positionOffset: {
		x:-1,
		y:-1,
	},
};
for(let i = 1; i <= 3; i++){
	let name = "assembling-machine-"+i;
	// entityDrawRules[name] = 
	entityDrawRules[name] = {
		spritesheet: spritesheetJson.frames["images/factorio/entity/"+name+"/"+name+".png.0"],
		sizeInTiles: {
			x:3.9,
			y:3.9,
		},
		positionOffset: {
			x:-1.4,
			y:-1.2,
		},
	}
	// template3x3entity;
};
["electric-mining-drill", "beacon", "electric-furnace"].forEach(name => {
	entityDrawRules[name] = template3x3entity;
});
["lab"].forEach(name => {
	entityDrawRules[name] = {
		spritesheet: spritesheetJson.frames["images/factorio/entity/"+name+"/"+name+".png.0"],
		sizeInTiles: {
			x:3.5,
			y:3,
		},
		positionOffset: {
			x:-1,
			y:-0.9,
		},
	}
});
entityDrawRules["chemical-plant"] = {
	spritesheet: [{
			spritesheet: spritesheetJson.frames["images/factorio/entity/chemical-plant/chemical-plant.png.0"],
			sizeInTiles: {
				x:3.5,
				y:3.5,
			},
			positionOffset: {
				x:-1.3,
				y:-1,
			},
		},{
			spritesheet: spritesheetJson.frames["images/factorio/entity/chemical-plant/chemical-plant.png.1"],
			sizeInTiles: {
				x:3.7,
				y:4,
			},
			positionOffset: {
				x:-1.3,
				y:-1.5,
			},
		},{
			spritesheet: spritesheetJson.frames["images/factorio/entity/chemical-plant/chemical-plant.png.2"],
			sizeInTiles: {
				x:3.5,
				y:3.2,
			},
			positionOffset: {
				x:-1.3,
				y:-1,
			},
		},{
			spritesheet: spritesheetJson.frames["images/factorio/entity/chemical-plant/chemical-plant.png.3"],
			sizeInTiles: {
				x:3.7,
				y:3.6,
			},
			positionOffset: {
				x:-1.45,
				y:-1.3,
			},
		},
	],
};
[{name: "solar-panel", ref:"images/factorio/entity/solar-panel/solar-panel.png"}].forEach(ent => {
	entityDrawRules[ent.name] = {
		spritesheet: spritesheetJson.frames[ent.ref],
		sizeInTiles: {
			x:3,
			y:3,
		},
		positionOffset: {
			x:-1,
			y:-1,
		},
	}
});

["transport-belt", "fast-transport-belt", "express-transport-belt"].forEach(name => {
	entityDrawRules[name] = {
		rotOffset: 270,
		spritesheet: spritesheetJson.frames["images/factorio/entity/"+name+"/"+name+".png.10"],
		sizeInTiles: {
			x:1.2,y:1.6,
		},
		positionOffset: {
			x:0,y:-0.2,
		}
	}
});
["splitter", "fast-splitter", "express-splitter"].forEach(splitter => {
	entityDrawRules[splitter] = {
		rotOffset:180,
	}
});
["underground-belt", "fast-underground-belt", "express-underground-belt"].forEach(underneathie => {
	entityDrawRules[underneathie] = {
		rotOffset: 270,
	}
});
["inserter", "fast-inserter", "stack-inserter", "filter-inserter", "burner-inserter", 'long-handed-inserter', 'stack-filter-inserter'].forEach(inserter => {
	entityDrawRules[inserter] = {
		rotOffset:90,
	}
});
entityDrawRules["straight-rail"] = {
	rotOffset: 0,
};
entityDrawRules["curved-rail"] = {
	rotOffset: 0
}
entityDrawRules["oil-refinery"] = {
	spritesheet: [
	{
		spritesheet: spritesheetJson.frames["images/factorio/entity/oil-refinery/oil-refinery.png.0"],
	}, {
		spritesheet: spritesheetJson.frames["images/factorio/entity/oil-refinery/oil-refinery.png.1"],
	}, {
		spritesheet: spritesheetJson.frames["images/factorio/entity/oil-refinery/oil-refinery.png.2"],
	}, {
		spritesheet: spritesheetJson.frames["images/factorio/entity/oil-refinery/oil-refinery.png.3"],
	}
	],
}
// correct image size for the oil refinery frames (same for all of them on this one)
entityDrawRules["oil-refinery"].spritesheet.forEach(object => {
	object.sizeInTiles = {
		x:10,
		y:7.5,
	}
	object.positionOffset = {
		x:-2,
		y:-2.7,
	}
});