import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import './CuidadosIa.css';

const CuidadosIa: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* Botão para voltar à Home automaticamente */}
            <IonBackButton defaultHref="/home" color="light" />
          </IonButtons>
          <IonTitle>Cuidados com a IA</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding pagina-desafios">
       <div className="header-definicao">
          <h1>Desafios e Cuidados</h1>
          <p>A tecnologia avança, mas a responsabilidade deve vir primeiro.</p>
        </div>

        <IonGrid>
    <IonRow>
      {/* Exemplo de Card de Desafio */}
      <IonCol size="12" size-md="6">
        <IonCard className="card-desafio etica">
          <IonCardHeader>
            <div className="badge-desafio">Ética</div>
            <IonCardTitle>Vieses e Preconceitos</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Sistemas de IA podem reproduzir preconceitos presentes nos dados de treinamento, resultando em decisões discriminatórias.
          </IonCardContent>
        </IonCard>
      </IonCol>

      <IonCol size="12" size-md="6">
        <IonCard className="card-desafio privacidade">
          <IonCardHeader>
            <div className="badge-desafio">Privacidade</div>
            <IonCardTitle>Segurança de Dados</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            O tratamento de dados sensíveis exige leis rigorosas (como a LGPD) para evitar vazamentos e monitoramento indevido.
          </IonCardContent>
        </IonCard>
      </IonCol>

      <IonCol size="12" size-md="6">
        <IonCard className="card-desafio dependencia">
          <IonCardHeader>
            <div className="badge-desafio">Dependência Tecnológica</div>
            <IonCardTitle>Perda de Autonomia</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            O uso excessivo de IA pode reduzir nossa habilidade de resolver problemas críticos ou tomar decisões importantes sem o auxílio de algoritmos.
          </IonCardContent>
        </IonCard>
      </IonCol>

      <IonCol size="12" size-md="6">
        <IonCard className="card-desafio social">
          <IonCardHeader>
            <div className="badge-desafio">Impacto Social</div>
            <IonCardTitle>Transformação do Trabalho</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            A automação acelerada pode extinguir funções tradicionais, exigindo que a sociedade crie novas formas de ocupação e requalificação profissional.
          </IonCardContent>
        </IonCard>
      </IonCol>

      <IonCol size="12" size-md="12">
        <IonCard className="card-desafio responsavel">
          <IonCardHeader>
            <div className="badge-desafio">Transparência</div>
            <IonCardTitle>Responsabilidade e Uso</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            É fundamental que os usuários saibam quando estão interagindo com uma IA e que os desenvolvedores sejam transparentes sobre como os resultados são gerados.
          </IonCardContent>
        </IonCard>
      </IonCol>

      
    </IonRow>
  </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CuidadosIa;