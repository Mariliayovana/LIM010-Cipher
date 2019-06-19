describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
     
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() =>{
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");
    });
    it('debería retornar "./01234567" para "0123456789"  con offset 30',() => {
      assert.equal(cipher.encode(30,"0123456789"),"./01234567");
    });
    it('debería retornar "ÒÓÔÕÖ×ØÙÚÍÎÏÐÑ" para "ÍÎÏÐÑÒÓÔÕÖ×ØÙÚ"  con offset 33',() => {
      assert.equal(cipher.encode(33,"ÍÎÏÐÑÒÓÔÕÖ×ØÙÚ"),"ÒÓÔÕÖ×ØÙÚÍÎÏÐÑ");
    });
    it('debería retornar "ëìíîïðñòóôõöèéê" para "èéêëìíîïðñòóôõö"  con offset 33',() => {
      assert.equal(cipher.encode(33,"èéêëìíîïðñòóôõö"),"ëìíîïðñòóôõöèéê");
    });
    it('debería retornar "ç" para "ç"  con offset 33',() => {
      assert.equal(cipher.encode(33,"ç"),"ç");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',() =>{
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });
    it('debería retornar "/012345678" para "-./0123456" con offset 30',() => {
      assert.equal(cipher.decode(30,"-./0123456"),"/012345678");
    });
    it('debería retornar "ÙÚÍÎÏÐÑÒÓÔÕÖ×Ø" para "ÍÎÏÐÑÒÓÔÕÖ×ØÙÚ" con offset 30',() => {
      assert.equal(cipher.decode(30,"ÍÎÏÐÑÒÓÔÕÖ×ØÙÚ"),"ÙÚÍÎÏÐÑÒÓÔÕÖ×Ø");
    });
    it('debería retornar "ñòóôõöéêëìíîïðñ" para "èéêëìíîïðñòóôõö" con offset 33',() => {
      assert.equal(cipher.decode(33,"èéêëìíîïðñòóôõö"),"ñòóôõöéêëìíîïðñ");
    });
    it('debería retornar " " para " " con offset 33',() => {
      assert.equal(cipher.decode(33," ")," ");
    });

  });

});
