class Road {
    constructor(x, width, laneCount = 4) {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width / 2;
        this.right = x + width / 2;
        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;
    }

    getLaneCenter(laneIndex){
        const laneWidth=this.width/this.laneCount;
        return this.left+laneWidth/2+laneIndex*laneWidth;
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        // Draw lanes
        for (let i = 1; i <= this.laneCount - 1; i++) {
            const x = lerp(this.left, this.right, i / this.laneCount);

            ctx.setLineDash([20, 20]); // Dashed lines for lanes
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }

        // Draw left and right borders
        ctx.setLineDash([]);  // Solid line for borders

        ctx.beginPath();
        ctx.moveTo(this.left, this.top);
        ctx.lineTo(this.left, this.bottom);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.right, this.top);
        ctx.lineTo(this.right, this.bottom);
        ctx.stroke();
    }
}

