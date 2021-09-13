import React from "react";
import { Story, Meta } from "@storybook/react";
import { ContentBasic, IContentBasicProps } from "./ContentBasic";

export default {
	title: "Blocks/ContentBasic",
	component: ContentBasic
} as Meta;

const Template: Story<IContentBasicProps> = args => <ContentBasic {...args}/>;

export const Default = Template.bind({});
Default.args = {
	content: `
# Consumpta videri

## Contraque quamlibet Longius Tonantis aevi

Lorem markdownum [saltem](http://www.me.org/duabusetficti) quid poma cunctis et
amorem *vident classes axem*; eras amores, *saxea septemfluus eripite* felix
vix. Solo nunc tibi, relictis nova, tot sub amicius parmam. Novis inopi essem
auctor in clara totiens ab ipsam gurgite. Et ensis vires mihi palmas. Sua tacui
candore, nupta sibi foret, cum voce magno, qui robora venturaque.

*Numitorque* moveri, credite et armos aetate, nomen erit aut? Suo vecte quae
Sardibus canentis in lustrabere aenis, funus pedibusque nomina quae Virbius!
Paulatim *quod* primo pars concordes pectore, oblivia, tibi. Solem inque
Iovisque pedes cupiere natalibus passis iaculum stimulis mixta vi baculum sine
carinae nostro dum videndi ratus intrarant.
  `
};
