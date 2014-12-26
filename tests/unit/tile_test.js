test('Tile.new', function() {
	var newTile = new Tile(2);
	console.log(newTile);
	QUnit.equal(2, newTile.value, "New tile shall have 2 as value");
	QUnit.equal(-1, newTile.row, "New tile shall have -1 as row as we didn't assign it");
	QUnit.equal(-1, newTile.oldRow, "New tile shall have -1 as old row");
	QUnit.equal(-1, newTile.oldColumn, "New tile shall have -1 as old column");
	QUnit.equal(false, newTile.markForDeletion, "new tile shall not marked for deletion");
});

test("Tile.moveTo", function() {
	var newTile = new Tile(2, 1, 1);
	newTile.moveTo(2, 2);
	QUnit.equal(2, newTile.row, "Tile shall be moved to row 2");
	QUnit.equal(2, newTile.column, "Tile shall be moved to column 2");
	QUnit.equal(1, newTile.oldRow, "Tile shall be moved from row 1");
	QUnit.equal(1, newTile.oldColumn, "Tile shall be moved from column 1");
});

test("Tile.isNew", function() {
	var tile = new Tile(2, 1, 1);
	QUnit.ok(tile.isNew(), "Tile which is not moved is new");
	tile.moveTo(2, 2);
	QUnit.ok(!tile.isNew(), "Tile after moving is not new");
});

test("Tile.hasMoved", function() {
	var tile = new Tile(2, 1, 1);
	QUnit.ok(!tile.hasMoved(), "New tile is not moved");
	tile.moveTo(2, 2);
	QUnit.ok(tile.hasMoved(), "Tile after moving is moved");
});

test("Tile.from* for unmerged tile", function() {
	var tile = new Tile(2, 1, 1);
	QUnit.equal(-1, tile.fromRow(), "It shall return oldRow");
	QUnit.equal(-1, tile.fromColumn(), "It shall return oldColumn");
});

test("Tile.from* for merged tile", function() {
	var tile = new Tile(2, 1, 3);
	tile.mergedInto = new Tile();
	QUnit.equal(1, tile.fromRow(), "It shall return row");
	QUnit.equal(3, tile.fromColumn(), "It shall return column");
});