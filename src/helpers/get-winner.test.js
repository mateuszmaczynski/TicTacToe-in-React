const getWinner = require('./get-winner').getWinner;

describe('Get winner function', () => {

    describe('When there is a winner', () => {

        it('should return true if there are all X(s)', function () {
            const gameFields = new Array(9).fill('X');
            expect(getWinner(gameFields)).toEqual({
                winner: true,
                name: 'X'
            });
        });

        describe('For horizontal lines', () => {

            it('should return true if all horizontal fields are X(s)', function () {
                const gameFields = [
            ['X', 'X', 'X', undefined, 'fief', 'O'],
                    ['', '', '', 'X', 'X', 'X', '', '', ''],
                    ['', '', '', '', '', '', 'X', 'X', 'X'],
                    ['', '', '', '', '', '', 'X', 'X']
                ];
                expect(getWinner(gameFields[0])).toEqual({
                    winner: true,
                    name: 'X'
                });
                expect(getWinner(gameFields[1])).toEqual({
                    winner: true,
                    name: 'X'
                });
                expect(getWinner(gameFields[2])).toEqual({
                    winner: true,
                    name: 'X'
                });
                expect(getWinner(gameFields[3])).toEqual({
                    winner: false
                });
            });

            it('should return true if all horizontal fields are O(s)', function () {
                const gameFields = [
                    ['', '', '', 'O', 'O', 'O', '', '', ''],
                ];
                expect(getWinner(gameFields[0])).toEqual({
                    winner: true,
                    name: 'O'
                });
            });

        });

        describe('For vertical lines', () => {

            it('should return true if all vertical fields are X(s)', function () {
                const gameFields = [
                    ['X', '', '', 'X', '', '','X'],
                    ['', 'X', '', '', 'X', '', '', 'X', ''],
                    ['', '', 'X', '', '', 'X', '', '', 'X'],
                ];
                expect(getWinner(gameFields[0])).toEqual({
                    winner: true,
                    name: 'X'
                });
                expect(getWinner(gameFields[1])).toEqual({
                    winner: true,
                    name: 'X'
                });
                expect(getWinner(gameFields[2])).toEqual({
                    winner: true,
                    name: 'X'
                });
            });

        });


    });

    describe('When there is no winner', () => {
        it('should return false if there is not winner', function () {
            const gameFields = new Array(9).fill('');
            expect(getWinner(gameFields)).toEqual({
                winner: false
            });
        });

        it('should return false if not all horizontal fields are O(s)', function () {
            const gameFields = [
                ['', '', '', 'O', 'X', 'O', '', '', ''],
            ];
            expect(getWinner(gameFields[0])).toEqual({
                winner: false
            });
        });
    })

});