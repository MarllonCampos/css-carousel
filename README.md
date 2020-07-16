# Carousel em css
## Criando um carousel em css para utilizar em projetos futuros
### Prévia de conhecimentos 
- display: **flex**;
- scroll-snap-type: **x mandatory**;
- scroll-behavior: **smooth**;
- scroll-snap-align: **start**;
- pointer-events: **none**;
- object-fit: **cover**;

## Explicação de alguns conhecimentos citados
### *Display:**flex***
>>> Foi utilizado neste projeto para alinhar as imagens em linha (flex-direction:row)

### *Object-fit:**cover***
>>> A propriedade *Object-fit:cover* foi utilizada nas tags `img` do html, para fazer com que as imagens ocupem todo o espaço "visível" disponivel dentro da tag _`div`_

### *Scroll-behavior:**smooth***
>>> Propriedade utilizada para deixar a "rolagem" do scroll de uma forma mais suave visualmente

### *Pointer-events:**none***
>>> Utilizado para desabilitar os eventos de click de dentro da div `items`
