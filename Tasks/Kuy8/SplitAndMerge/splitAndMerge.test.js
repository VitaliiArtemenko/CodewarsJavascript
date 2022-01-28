const splitAndMergeTest = require('./splitAndMerge');

describe('Training JS #18: Methods of String object--concat() split() and its good friend join()', () => {

   it('Test_1', () => {
       expect(splitAndMergeTest('My name is John', ' ')).toEqual('M y n a m e i s J o h n');
   });

    it('Test_2', () => {
        expect(splitAndMergeTest('My name is John', '-')).toEqual('M-y n-a-m-e i-s J-o-h-n');
    });

    it('Test_3', () => {
        expect(splitAndMergeTest('Hello World!', '.')).toEqual('H.e.l.l.o W.o.r.l.d.!');
    });

    it('Test_4', () => {
        expect(splitAndMergeTest('Hello World!', ',')).toEqual('H,e,l,l,o W,o,r,l,d,!');
    });

    it('Test_5', () => {
        expect(splitAndMergeTest('acwx dkmi weg hwqcy xok gxhvvgkw tevfobgf wbqfaohd pjnq ericrljt jylnfn ' +
            'cswubtxar aoibzf gtdhqefs cjhgpbjluu kumc', '$'))
            .toEqual('a$c$w$x d$k$m$i w$e$g h$w$q$c$y x$o$k g$x$h$v$v$g$k$w t$e$v$f$o$b$g$f w$b$q$f$a$o$h$d ' +
                'p$j$n$q e$r$i$c$r$l$j$t j$y$l$n$f$n c$s$w$u$b$t$x$a$r a$o$i$b$z$f g$t$d$h$q$e$f$s c$j$h$g$p$b$j$l$u$u k$u$m$c');
    });

    it('Test_6', () => {
        expect(splitAndMergeTest('uakgylx hkisobtixh cadca xvpbob dbxhh bzz', '_'))
            .toEqual('u_a_k_g_y_l_x h_k_i_s_o_b_t_i_x_h c_a_d_c_a x_v_p_b_o_b d_b_x_h_h b_z_z');
    });
});