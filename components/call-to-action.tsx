import Image from "next/image";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        Create your own learning companion to help you learn and grow. Choose a
        subject, set a duration, and let your companion guide you through the
        learning process.
      </p>
      <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>Create your own companion</p>
        </Link>
      </button>
    </section>
  );
};

export default CallToAction;
