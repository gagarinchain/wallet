import hash from '../src/transactor/hasher';
import {gagarin} from "../protos";

it('renders without crashing', () => {
  let tx = gagarin.network.core.Transaction.create(
      {
        type: 2,
        to: Buffer.from("0xA01781411F964AC236bD05f96d45A02713d178d4".substring(2), 'hex'),
        from: Buffer.from("0x992AE4f167dD3Bf65c3c52b4149431cAA6b6c142".substring(2), 'hex'),
        nonce: 10,
        value: 20,
        fee: 30,
        signature: null,
        data: Buffer.from("sdasdsdasdwftvxcasCQEWFQREF", 'utf-8')
      });

  let h = hash(tx);
  console.log(Buffer.from(h).toString('hex'))
});
