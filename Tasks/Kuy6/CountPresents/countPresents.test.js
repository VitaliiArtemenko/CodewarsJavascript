const countPresentsTest = require('./countPresents');
const prod1 = {"Santa": 1, "elf_1": 1, "elf_2": 2};
const presents1 = ["01:00:00", "06:00:00", "12:00:00", "18:00:00", "24:00:00", "36:00:00"];
const prod2 = { Santa: 1, elf_1: 1, elf_2: 2 };
const presents2 = [];
const prod3 = { Santa: 3, elf_0: 4, elf_1: 1, elf_2: 2, elf_3: 4, elf_4: 4, elf_5: 1 };
const presents3 = [ '13:56:33', '04:15:29', '11:23:56', '20:10:38', '02:29:03', '22:17:05', '21:25:56', '18:02:39',
    '00:26:32', '13:08:42', '22:16:08', '08:59:14', '18:53:43', '12:26:22', '20:51:50', '15:26:28', '18:23:10',
    '20:08:53', '11:53:36', '10:03:18', '17:08:54', '04:24:34', '14:04:16' ];
const prod4 = { Santa: 1, elf_0: 3, elf_1: 3, elf_2: 4, elf_3: 1 };
const presents4 = [ '01:08:38', '15:25:57', '08:34:36', '07:56:10', '21:56:04', '12:01:55', '16:34:20', '09:15:09',
    '13:03:50', '21:01:10', '13:15:09', '22:13:38', '05:15:24' ];

describe('Christmas Present Calculator', () => {

    it('Test_1', () => {
        expect(countPresentsTest(prod1, presents1)).toEqual(5);
    });

    it('Test_2', () => {
        expect(countPresentsTest(prod2, presents2)).toEqual(0);
    });

    it('Test_3', () => {
        expect(countPresentsTest(prod3, presents3)).toEqual(23);
    });

    it('Test_4', () => {
        expect(countPresentsTest(prod4, presents4)).toEqual(13);
    });
});