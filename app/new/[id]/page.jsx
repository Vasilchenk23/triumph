import { query } from '../../lib/db';
import Image from 'next/image';

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
      {article.img && (
        <Image
          src={`https://admins-one.vercel.app/${article.img.replace(/^\/+/, '')}`}
          alt={article.title}
          className="object-cover rounded-md mb-4 w-full max-w-lg"
          width={600}
          height={400}
        />
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Описание</h2>
        <DescriptionRenderer description={article.description} />
      </div>
    </main>
  );
}

/**
 * Компонент для рендера richText-описания.
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

  return <div className="prose prose-invert max-w-none">{renderSlateNodes(nodes)}</div>;
}

/**
 * Функция рендера richText-структуры из Payload CMS.
 */
function renderSlateNodes(nodes) {
  return nodes.map((node, index) => {
    if (node.type === "h1") return <h1 key={index} className="text-3xl font-bold">{renderChildren(node.children)}</h1>;
    if (node.type === "h2") return <h2 key={index} className="text-2xl font-bold">{renderChildren(node.children)}</h2>;
    if (node.type === "h3") return <h3 key={index} className="text-xl font-bold">{renderChildren(node.children)}</h3>;
    if (node.type === "ul") return <ul key={index} className="list-disc pl-5">{renderChildren(node.children)}</ul>;
    if (node.type === "ol") return <ol key={index} className="list-decimal pl-5">{renderChildren(node.children)}</ol>;
    if (node.type === "blockquote") return <blockquote key={index} className="border-l-4 border-gray-500 pl-4 italic">{renderChildren(node.children)}</blockquote>;

    if (node.type === "link") {
      return (
        <a
          key={index}
          href={node.url}
          target={node.newTab ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          {renderChildren(node.children)}
        </a>
      );
    }

    return <p key={index} className="mb-2">{renderChildren(node.children)}</p>;
  });
}

/**
 * Функция для обработки текста и его стилей (жирный, курсив и т.д.).
 */
function renderChildren(children) {
  return children.map((child, idx) => renderLeaf(child, idx));
}

function renderLeaf(leaf, key) {
  let content = leaf.text || "";

  if (leaf.bold) content = <strong key={key + "-bold"}>{content}</strong>;
  if (leaf.italic) content = <em key={key + "-italic"}>{content}</em>;
  if (leaf.underline) content = <u key={key + "-underline"}>{content}</u>;
  if (leaf.strikethrough) content = <s key={key + "-strike"}>{content}</s>;

  return <span key={key}>{content}</span>;
}
