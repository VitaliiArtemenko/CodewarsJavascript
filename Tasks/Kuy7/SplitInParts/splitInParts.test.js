const splitInPartsTest = require('./splitInParts');

describe('Split In Parts', () => {

    it('Test_1', () => {
        expect(splitInPartsTest('supercalifragilisticexpialidocious', 3))
            .toEqual('sup erc ali fra gil ist ice xpi ali doc iou s');
    });

    it('Test_2', () => {
        expect(splitInPartsTest('emcftonhfsposgrotyroniympatrcskzmmepwownrvtpk', 7))
            .toEqual('emcfton hfsposg rotyron iympatr cskzmme pwownrv tpk');
    });

    it('Test_3', () => {
        expect(splitInPartsTest('jeuodkhusqgxnaktrovtjcsmivsrclgyohpuiulfpfxqfturobewumxvjgtmqbghurmnzsvuzvuedolhmx' +
            'rxilerinjtxsqmvxigwcqzeuthcezgrfqtgtuwqlwrxnzobczozuhogvjhcsdkf', 8))
            .toEqual('jeuodkhu sqgxnakt rovtjcsm ivsrclgy ohpuiulf pfxqftur obewumxv jgtmqbgh ' +
                'urmnzsvu zvuedolh mxrxiler injtxsqm vxigwcqz euthcezg rfqtgtuw qlwrxnzo bczozuho gvjhcsdk f');
    });

    it('Test_4', () => {
        expect(splitInPartsTest('ghgcofsdmzwzeikfyotxvaxqovyodovqeumoadcgelgcogazjzlhnyqpzcapmlfryzqjiisglqddgrdohyk' +
            'dtxmmiymzbtcfdqxaxsqjizgqzsgewuddzmwgacawlybvvrptkheewuwcphituihnpoentvyoeaplsrdczeawpguihflogjodatadrkiv' +
            'gpjmapjlmuimpjlkkaduuxtvxrxtgkssdpqybncjngiatewofoccywjogshwxr', 21))
            .toEqual('ghgcofsdmzwzeikfyotxv axqovyodovqeumoadcgel gcogazjzlhnyqpzcapmlf ryzqjiisglqddgrdohykd ' +
                'txmmiymzbtcfdqxaxsqji zgqzsgewuddzmwgacawly bvvrptkheewuwcphituih npoentvyoeaplsrdczeaw ' +
                'pguihflogjodatadrkivg pjmapjlmuimpjlkkaduux tvxrxtgkssdpqybncjngi atewofoccywjogshwxr');
    });

    it('Test_5', () => {
        expect(splitInPartsTest('xkjxkcoreblmvjlculhkczbnuitfwhrpkploqxqqlgkenayzlcrckcukhbsfcipboxbfaebqdir' +
            'ytbgkahijjd', 9))
            .toEqual('xkjxkcore blmvjlcul hkczbnuit fwhrpkplo qxqqlgken ayzlcrckc ukhbsfcip boxbfaebq ' +
                'dirytbgka hijjd');
    });
});