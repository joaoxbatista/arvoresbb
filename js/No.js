class No
{
	constructor(x, y, value)
	{
		this.x = x
		this.y = y
		this.value = value
	}

	draw()
	{
		ctx.fillText(this.value, this.x - 4, this.y + 4);
		ctx.beginPath();
		ctx.arc(this.x, this.y, 15, 0, 2 * Math.PI);
		ctx.stroke();
	}
}