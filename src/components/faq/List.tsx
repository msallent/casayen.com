import { Expandable } from '@/components/Expandable';

export function List() {
  return (
    <div className="mt-12 mb-20">
      <Expandable title="¿Cómo sé si necesito sanar mi energía sexual?">
        <div className="text-primary-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est provident voluptas qui
          optio tenetur eveniet, ipsam tempore dolorem laboriosam rerum explicabo nam perferendis,
          tempora laborum, ea omnis sed sequi!
        </div>
      </Expandable>
      <Expandable title="¿Qué es un huevo Yoni?">
        <div className="text-primary-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est provident voluptas qui
          optio tenetur eveniet, ipsam tempore dolorem laboriosam rerum explicabo nam perferendis,
          tempora laborum, ea omnis sed sequi!
        </div>
      </Expandable>
      <Expandable title="¿Qué son las vaporizaciones Yoni?">
        <div className="text-primary-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est provident voluptas qui
          optio tenetur eveniet, ipsam tempore dolorem laboriosam rerum explicabo nam perferendis,
          tempora laborum, ea omnis sed sequi!
        </div>
      </Expandable>
      <Expandable title="¿Cómo curar infecciones con Aceite de Neem?" withBottomBorder>
        <div className="text-primary-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est provident voluptas qui
          optio tenetur eveniet, ipsam tempore dolorem laboriosam rerum explicabo nam perferendis,
          tempora laborum, ea omnis sed sequi!
        </div>
      </Expandable>
    </div>
  );
}
