import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import './AplicacoesIa.css';
import { openOutline } from 'ionicons/icons';

const AplicacoesIa: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* Botão para voltar à Home automaticamente */}
            <IonBackButton defaultHref="/home" color="light" />
          </IonButtons>
          <IonTitle>Aplicações da IA</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="pagina-aplicacoes ion-padding">
        <div className="header-definicao">
          <h1>IA no dia a dia</h1>
          <p>Como a Inteligência Artificial interfere no nosso cotidiano.</p>
        </div>

        <IonGrid className="grid-aplicacoes">
          <IonRow className="ion-align-items-stretch">
            <IonCol size="6" size-md="4">
              <IonCard className="card-aplicacao">
                <img src="https://noticias.gs1br.org/wp-content/uploads/2019/10/assistente-de-voz.jpg" />
                <IonCardHeader>
                  <IonCardTitle>Assistentes Virtuais de Voz</IonCardTitle>
                  <IonCardSubtitle>Conversa e Automação</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  <p>Ferramentas como Alexa, Siri e Google Assistente usam Processamento de Linguagem Natural para entender seus comandos, responder perguntas e controlar dispositivos na sua casa.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6" size-md="4">
              <IonCard className="card-aplicacao">
                <img  src="https://pushnews.com.br/blog/wp-content/uploads/2019/04/original-e96ac847ac451acd6acff0e7f43ef412.jpg" />
                <IonCardHeader>
                  <IonCardTitle>Algoritimos de Recomendação</IonCardTitle>
                  <IonCardSubtitle>Personalização de Conteúdo</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  <p>Já reparou como a Netflix ou o Spotify sempre sabem o que você quer ver ou ouvir? A IA analisa seu histórico de uso para sugerir o que mais combina com seu gosto.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6" size-md="4">
              <IonCard className="card-aplicacao">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nz7yAq5LAPCwwgsCkWbTSMSs4Kkfiw7q7g&s" />
                <IonCardHeader>
                  <IonCardTitle>Filtros de Spam e Segurança</IonCardTitle>
                  <IonCardSubtitle>Proteção Invisível</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  <p>Seu Gmail ou Outlook usa IA para aprender a diferença entre um e-mail importante e uma propaganda indesejada, bloqueando ameaças antes mesmo de você abrir a caixa de entrada.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-center">
            <IonCol size="6" size-md="4">
              <IonCard className="card-aplicacao">
                <img src="data:image/jpeg;base64,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" />
                <IonCardHeader>
                  <IonCardTitle>Reconhecimento Facial</IonCardTitle>
                  <IonCardSubtitle>Segurança e Biometria</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  <p>Ao desbloquear seu iPhone ou marcar amigos em fotos no Facebook, a IA utiliza Visão Computacional para identificar traços únicos no rosto humano com precisão matemática.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6" size-md="4">
              <IonCard className="card-aplicacao">
                <img src="https://www.carroaluguel.com/blog/wp-content/uploads/2017/02/aplicativos-gps.jpg" />
                <IonCardHeader>
                  <IonCardTitle>Navegação e Mapas (GPS)</IonCardTitle>
                  <IonCardSubtitle>Otimização de Rotas</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  <p>O Google Maps e o Waze usam IA para analisar dados de tráfego em tempo real, prevendo congestionamentos e sugerindo o caminho mais rápido para o seu destino.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6" size-md="4">
              <IonCard className="card-aplicacao">
                <img src="https://blog.even3.com.br/wp-content/uploads/2021/05/traducao-simultanea-imagem-de-destaque.png" />
                <IonCardHeader>
                  <IonCardTitle>Tradução Instantânea</IonCardTitle>
                  <IonCardSubtitle>Derrubando Barreiras</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  <p>Ferramentas como o Google Tradutor não trocam apenas palavras; elas usam redes neurais para entender o contexto e a gramática, entregando traduções cada vez mais naturais.</p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
            <IonRow className="ion-justify-content-center">
                        <IonCol size="5">
                          <IonButton expand="block" size="default" shape="round" className="botao-custom" routerLink="/vantagens-ia">
                          <IonIcon icon={openOutline} slot="end"/>Ver as vantagens da IA</IonButton>
                        </IonCol>
                        </IonRow>
            
            </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AplicacoesIa;