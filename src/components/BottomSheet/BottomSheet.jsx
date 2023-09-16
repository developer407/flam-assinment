import React, { useRef, useState } from "react";
import "./BottomSheet.css";

const BottomSheet = () => {
  const [sheetState, setSheetState] = useState("fullyOpen");
  const sheetRef = useRef(null);
  const startY = useRef(null);
  const isDragging = useRef(false);

  const snapPoints = {
    closed: 10, // Height when closed
    halfOpen: 50, // Height when half-open
    fullyOpen: 100, // Height when fully open
  };

  const toggleSheet = () => {
    if (sheetState === "closed") {
      setSheetState("halfOpen");
    } else if (sheetState === "halfOpen") {
      setSheetState("fullyOpen");
    } else {
      setSheetState("closed");
    }
  };

  return (
    <div
      ref={sheetRef}
      className={`bottom-sheet ${sheetState}`}
      style={{ height: `${snapPoints[sheetState]}vh` }}
    >
      <div onClick={toggleSheet} className="bottom-sheet-handle">
        {(sheetState === "closed" || sheetState === "halfOpen") && (
          <span>&#x25B2;</span>
        )}
        {sheetState === "fullyOpen" && <span>&#x25BC;</span>}
      </div>

      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, iusto ullam pariatur magni ratione accusantium dolorem,
          ipsam maxime asperiores amet, at doloremque quam odio rem quod.
          Dolorum ab atque corrupti. Nostrum vitae sit repellendus nihil quod
          exercitationem debitis aut itaque veniam consequatur ipsa incidunt
          blanditiis, dicta aperiam numquam iste expedita dolores fugiat ex
          dolore. Sapiente alias eveniet assumenda ratione et? Mollitia nesciunt
          rem esse culpa, sequi placeat eveniet quia! Eius temporibus
          repudiandae error fugiat, commodi tempora exercitationem, earum
          eligendi, quibusdam blanditiis consequatur rerum illum? Alias aperiam
          eius autem asperiores! Natus? Magni placeat suscipit aspernatur
          doloribus natus asperiores culpa, impedit error sequi fuga a totam
          veniam voluptate veritatis voluptas, tenetur eos consequuntur
          exercitationem soluta quia, ratione cum. Quos ducimus debitis magni!
          Aliquid assumenda excepturi tenetur a neque nihil quam! Minima eum
          mollitia, autem magnam quis maxime accusamus quas eius aliquam ab,
          dolorem est unde iusto quidem sed aperiam maiores debitis accusantium.
          Sit excepturi nemo sequi fugit. Laboriosam quis sit ratione, eos
          repellendus quia aliquam est deleniti corporis, quam quaerat saepe
          tempore soluta assumenda ipsa nemo necessitatibus. Laborum iure odio
          perferendis beatae? Quos quod odit assumenda ea, ipsum vero! Magnam
          soluta debitis aliquam nulla ullam praesentium deleniti, sit modi
          officia quam voluptatem nam veniam impedit voluptatibus, dolores
          recusandae nemo, quis repellat eos? Nihil minima qui debitis
          necessitatibus nostrum totam assumenda ex voluptate, repellendus
          ipsum, enim eaque vero? Adipisci, cumque? Mollitia accusantium dolorem
          amet natus eveniet ab officia debitis dolorum. Delectus, praesentium
          omnis! Perspiciatis facere voluptatum nemo quaerat totam dicta magnam
          impedit quos corrupti, esse aut vitae culpa. Suscipit quisquam vero,
          inventore architecto iure voluptates dolor, minima, quibusdam
          consequuntur modi fugiat provident est! Provident, nostrum sed odio
          ratione est, architecto dolorem libero doloribus dicta suscipit
          aspernatur tempore quasi asperiores porro eius esse laboriosam vitae
          cupiditate nesciunt illo! Ipsa doloremque quas nobis quisquam
          molestiae? Aut perferendis ea nihil temporibus placeat itaque
          repellat, deserunt quos nemo fugit necessitatibus, pariatur explicabo
          ducimus labore officiis maiores eveniet quae architecto nostrum,
          corrupti mollitia ut? Laudantium cumque eveniet nisi? Incidunt sit
          deleniti inventore doloribus quos perferendis dicta corporis facilis
          animi itaque, accusamus excepturi, unde exercitationem quidem? Quo
          aspernatur, quidem hic nesciunt, nemo excepturi libero exercitationem
          impedit laboriosam, culpa rerum. Quaerat accusamus et quibusdam
          consectetur! Perspiciatis debitis quaerat eos? Pariatur nihil
          similique quidem porro amet debitis eos dolores, facere perspiciatis
          fuga explicabo distinctio molestias sunt sit expedita necessitatibus
          optio deserunt. Id dolores nisi accusantium repellendus aperiam fugit
          iure in quidem reiciendis cumque voluptate repellat, ipsum, earum
          adipisci suscipit natus! Expedita molestiae, dolorum sit amet aliquam
          neque soluta deserunt autem perspiciatis. Quos officiis, omnis at esse
          nobis ullam sunt ratione eum reprehenderit nostrum adipisci,
          perspiciatis mollitia aut vero minus nemo rem incidunt necessitatibus
          ad quasi alias doloribus facilis nulla velit. Sint. Fuga hic autem
          sunt harum sit soluta rerum dicta, optio assumenda quaerat et
          praesentium corrupti voluptate, quae ratione, temporibus debitis
          obcaecati magni impedit placeat odit. Sed adipisci omnis aliquam
          quibusdam! Eos est sint nemo sit! Autem repellendus dolorem quaerat
          animi excepturi itaque enim, placeat nemo sint culpa quis rem hic!
          Expedita eveniet, omnis labore earum et vero numquam laboriosam
          cumque! Beatae ea omnis at sapiente quas culpa eveniet nam impedit
          provident et similique magni distinctio voluptates autem nostrum
          molestias maiores possimus, quia deserunt aperiam ut cumque! Magnam
          tempore pariatur ut? Aliquam soluta eaque exercitationem sed fugit ex,
          aperiam, rerum commodi laborum, placeat voluptates tempore ipsa quo
          voluptas! Iusto autem, necessitatibus ab atque, consectetur rerum
          accusantium nulla harum cumque minima placeat? Maiores fugiat natus
          quam soluta est? Accusantium maxime labore nam porro! Dicta, illo sunt
          sed aliquam rerum magnam ipsum nam voluptate. Totam facere reiciendis
          numquam voluptatibus ut similique error inventore? Similique
          temporibus architecto est suscipit voluptatum numquam nesciunt
          exercitationem veritatis tenetur voluptatem! Excepturi, quibusdam,
          soluta sapiente ad nemo dolores, saepe ducimus itaque commodi nulla
          architecto repellat doloremque atque. Tempore, rerum? A sit aliquid
          libero aliquam culpa placeat provident ratione nihil repellendus
          minus, vero, quam alias iusto, laborum necessitatibus facere.
          Consequatur tempora quisquam reprehenderit voluptatibus sed iste autem
          aperiam perferendis commodi. Nam, perspiciatis? Tenetur eaque quo quis
          eius! Soluta enim consequuntur atque voluptatibus, aliquid alias
          adipisci repudiandae omnis nihil beatae animi illo dicta, corrupti
          dolor! Totam quam cumque omnis quae possimus? Distinctio sunt in
          accusamus necessitatibus dolores! Corrupti animi perferendis debitis
          dolore aliquid quod cupiditate possimus, assumenda saepe consectetur
          vero sed iusto molestias, consequuntur magnam. Maiores odio architecto
          esse fuga nisi. Dicta, dolor rem voluptatibus laboriosam quasi aliquid
          quisquam voluptatum reiciendis maiores cupiditate temporibus tempore
          eius explicabo culpa, iure atque odit dolores recusandae ipsum
          mollitia error itaque magni. Harum, temporibus facere.
        </p>
      </div>
    </div>
  );
};

export default BottomSheet;
