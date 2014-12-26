var Tile = function(value, row, column) {
	this.value = value || 0;
	this.row = row || -1;
	this.oldRow = -1;
	this.oldColumn = -1;
	this.markForDeletion = false;
	this.mergeInto = null;
	this.id = Tile.id++;
};

Tile.id = 0;

Tile.prototype.moveTo = function(row, column) {
	this.oldRow = this.row;
	this.oldColumn = this.column;
	this.row = row;
	this.column = column;
};

Tile.prototype.isNew = function() {
	return this.oldRow == -1 && !this.mergeInto;
};

Tile.prototype.hasMoved = function() {
	return (this.fromRow() != -1 && (this.fromRow() != this.toRow() || this.fromColumn() != this.toColumn())) ||
    this.mergedInto;
};

Tile.prototype.fromRow = function () {
  return this.mergedInto ? this.row : this.oldRow;
};

Tile.prototype.fromColumn = function () {
  return this.mergedInto ? this.column : this.oldColumn;
};

Tile.prototype.toRow = function () {
  return this.mergedInto ? this.mergedInto.row : this.row;
};

Tile.prototype.toColumn = function () {
  return this.mergedInto ? this.mergedInto.column : this.column;
};

