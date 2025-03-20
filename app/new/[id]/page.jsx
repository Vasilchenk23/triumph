
import { query } from '../../lib/db';

export default async function ArticlePage({ params: { id } }) {
  const results = await query('SELECT * FROM news WHERE id = $1', [id]);
  const article = results[0];

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  const formattedDate = new Date(article.date).toLocaleDateString("uk-UA");

  return (
    <main className="p-6 bg-[#0A0A0A] text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="mb-4 text-gray-400">
        {article.author} - {formattedDate}
      </p>
      <img
        src={`https://admins-one.vercel.app/${article.img}`}
        alt={article.title}
        className="object-cover rounded-md mb-4 w-full max-w-lg"
      />
      <div className="text-lg leading-relaxed">
        {article.content}
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Описание</h2>
        <DescriptionRenderer description={article.description} />
      </div>
    </main>
  );
}

/**
 * Компонент для отрисовки richText-описания, сохранённого как JSON.
 * Здесь мы ожидаем, что description – это либо массив объектов, либо строка, которую можно распарсить.
 */
function DescriptionRenderer({ description }) {
  if (!description) return null;
  
  let nodes = description;
  if (typeof description === 'string') {
    try {
      nodes = JSON.parse(description);
    } catch (err) {
      console.error("Ошибка при парсинге description", err);
      return <div>Ошибка при загрузке описания</div>;
    }
  }
  
  // Ожидаем, что nodes – это массив блоков
  return <div>{renderSlateNodes(nodes)}</div>;
}

/**
 * Функция отрисовки массива блоков Slate.
 * Предполагается, что каждый блок – это, например, абзац.
 */
function renderSlateNodes(nodes) {
  return nodes.map((node, index) => {
    // Если у блока определены дочерние узлы, оборачиваем их в абзац
    if (node.children) {
      return (
        <p key={index}>
          {node.children.map((child, idx) => renderLeaf(child, idx))}
        </p>
      );
    }
    return null;
  });
}

function renderLeaf(leaf, key) {
  let content = leaf.text || "";

  if (leaf.bold) {
    content = <strong key={key + "-bold"}>{content}</strong>;
  }
  if (leaf.italic) {
    content = <em key={key + "-italic"}>{content}</em>;
  }
  if (leaf.underline) {
    content = <u key={key + "-underline"}>{content}</u>;
  }
  if (leaf.strikethrough) {
    content = <s key={key + "-strike"}>{content}</s>;
  }
  
  return <span key={key}>{content}</span>;
}
