"use client";
import { useEffect, useState } from "react";
import { ContactTable } from "@/components/admin/contact/Table";
import { ContactStats } from "@/components/admin/contact/Stats";
import { ContactEntry } from "@/types/contact";
import { ViewContactDialog } from "@/components/admin/dialog/ViewContact";
import { DeleteContactDialog } from "@/components/admin/dialog/DeleteContact";
import { Filters } from "@/components/admin/Filters";

export default function AdminContact() {
  const [status, setStatus] = useState("");
  const [topic, setTopic] = useState("");
  const [contacts, setContacts] = useState<ContactEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<ContactEntry | null>(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const fetchContacts = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      if (status) {
        params.append("status", status);
      }

      if (topic) {
        params.append("topic", topic);
      }

      const res = await fetch(
        `/api/contact?${params.toString()}`
      );

      const json = await res.json();

      if (json.success) {
        setContacts(json.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [status, topic]);

  const handleTreat = async (
    contact: ContactEntry
  ) => {
    try {
      await fetch(
        `/api/contact/${contact._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            status: "treated",
          }),
        }
      );

      fetchContacts();

      if (
        selectedContact?._id === contact._id
      ) {
        setSelectedContact({
          ...contact,
          status: "treated",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ContactStats />

      <div className="mt-6">
        <Filters
          filters={[
            {
              type: "select",
              value: status,
              placeholder: "Filter by status",
              options: [
                {
                  label: "Pending",
                  value: "pending",
                },
                {
                  label: "Treated",
                  value: "treated",
                },
              ],
              onChange: setStatus,
            },
            {
              type: "input",
              value: topic,
              placeholder: "Filter by topic...",
              onChange: setTopic,
            },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContactTable
          contacts={contacts}
          loading={loading}
          onView={(contact) => {
            setSelectedContact(contact);
            setViewOpen(true);
          }}
          onTreat={handleTreat}
          onDelete={(contact) => {
            setSelectedContact(contact);
            setDeleteOpen(true);
          }}
        />
      </div>

      {/* View Contact */}

      <ViewContactDialog
        open={viewOpen}
        onOpenChange={setViewOpen}
        contact={selectedContact}
        onTreat={async () => {
          if (!selectedContact) return;

          await handleTreat(selectedContact);
        }}
        onDelete={() => {
          setViewOpen(false);
          setDeleteOpen(true);
        }}
      />

      {/* Delete Contact */}

      <DeleteContactDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        contact={selectedContact}
        onConfirm={async () => {
          if (!selectedContact) return;

          try {
            const res = await fetch(
              `/api/contact/${selectedContact._id}`,
              {
                method: "DELETE",
              }
            );

            const json = await res.json();

            if (json.success) {
              setDeleteOpen(false);
              setSelectedContact(null);
              fetchContacts();
            }
          } catch (err) {
            console.error(err);
          }
        }}
      />
    </>
  );
}